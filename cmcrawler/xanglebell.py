from importlib.metadata import entry_points
import os
import tweepy
from dotenv import load_dotenv
import telegram as tel
import telegram.ext as tel_ex
import json



load_dotenv()

consumer_key = os.getenv("CONSUMER_KEY")
consumer_secret = os.getenv("CONSUMER_SECRET")
access_token = os.getenv("ACCESS_TOKEN")
access_secret = os.getenv("ACCESS_SECRET")
bearer_token = os.getenv("BEARER_TOKEN")
telegram_token = os.getenv("TELEGRAM_TOKEN")
bot = tel.Bot(token=telegram_token)
chat_id = 551338188

api = tweepy.Client(
    bearer_token = bearer_token,
    consumer_key=consumer_key,
    consumer_secret=consumer_secret, 
    access_token=access_token, 
    access_token_secret=access_secret,
    )

with open("stats.json", "r") as f:
    stats = json.load(f)


updater = tel_ex.Updater(token=telegram_token)
dispatcher = updater.dispatcher
conv_handler = tel_ex.ConversationHandler(
    entry_points=[tel_ex.CommandHandler('changelastid', changeLastIDCommand)],
    fallbacks=[],
    states={
        LAST_ID: [CommandHandler('getid', )]
    } 
)

archived_idx = set()
tweet_dict_idx = {}
include = stats["include"]
exclude = stats["exclude"]
text_start="""<b><i>XangleBell</i></b>\n<p>Welcome!Here are list of commands you can use with XangleBell!</p>\n<code>/start</code> - a little intro on how to use XangleBell\n<code>/crawl</code> - a little crawling to collect latest tweets from your twitter followings\n<code>/archive</code> - by pressing 'archive' you can see your scraped tweets in a single message\n<code>/filters</code> - view & manage filter status so you don't need to look at every random tweet\n"""

def startCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global text_start
    bot.sendMessage(
        chat_id=chat_id,
        text=text_start,
        parse_mode="HTML",
    )

def crawlCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global tweet_dict_idx
    tweet_dict_idx, crawl_log = crawl(api)
    bot.sendMessage(
        chat_id=chat_id,
        text=crawl_log,
        parse_mode="HTML",
    )

def filtersCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global include, exclude
    include_text = "-" + "\n-".join(include)
    exclude_text = "-" + "\n-".join(exclude)
    bot.sendMessage(
        chat_id=chat_id,
        text=f"<b><i>Filter Stats</i></b>\n\n<i>[Keywords]</i>\n{include_text}\n\n<i>[Non-Keywords]</i>\n{exclude_text}",
        parse_mode="HTML",
    )

def changeLastIDCommand(update:tel.Update, context:tel_ex.CallbackContext):
    last_id = read_id()
    bot.sendMessage(
        chat_id=chat_id,
        text=f"<b><i>Changing Checkpoint</i></b>\n\n<i>Current tweet checkpoint: <code>last_id: {last_id}</code>\n\nplease type tweet_id you wish to change your checkpoint to",
        parse_mode="HTML",
    )
    return LAST_ID

def exitCommand(update:tel.Update, context:tel_ex.CallbackContext):
    pass



# def manageKeywordCommand(update:tel.Update, context:tel_ex.CallbackContext):
#     global include
#     bot.sendMessage(
#         chat_id=chat_id,
#         text="type a word you would like to add/remove from the keyward list"
#         parse_mode="HTML"
#     )

def manageNonKeywordCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global exclude

def removeNonKeywordCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global exclude

def archiveCommand(update:tel.Update, context:tel_ex.CallbackContext):
    global tweet_dict_idx, archived_idx
    archived_text = ""
    for idx, tweet_idx in enumerate(archived_idx):
        if idx==0:
            archived_text += "<b><i>ARCHIVE RESULT</i></b>\n\n"
        archived_text += f"<b>{idx+1}.</b> {tweet_dict_idx[tweet_idx]}\n\n"
    try:
        bot.sendMessage(
            chat_id=chat_id,
            text=archived_text,
            parse_mode="HTML",
        )
    except tel.error.BadRequest:
        bot.sendMessage(
            chat_id=chat_id,
            text="<b><i>ARCHIVE RESULT</i></b>\n<code>no archived tweets available</code>",
            parse_mode="HTML"
        )
    archived_idx.clear()


# add tweet data to archived_text
def queryHandler(update:tel.Update, context:tel_ex.CallbackContext):
    query = update.callback_query.data
    update.callback_query.answer()
    global archived_idx
    archived_idx.add(int(query))


# provide tweet formatting
def tweet_format(tweet_dict, scraped=False):
    user_name = tweet_dict["user_name"]
    user_username = tweet_dict["user_username"]
    tweet_text = tweet_dict["tweet_text"]
    tweet_id = tweet_dict["id"]
    
    if scraped:
        return f"""<b>{user_name} | @{user_username}\n</b><i>{tweet_text}</i>\nhttps://twitter.com/{user_username}/status/{tweet_id}\n\n""" 
    else:
        return f"""<b>{user_name} | @{user_username}\n</b><i>{tweet_text}</i>\n""" 

# provide tweet formatting
def link_format(tweet_dict):
    user_username = tweet_dict["user_username"]
    tweet_id = tweet_dict["id"]
    return f"https://twitter.com/{user_username}/status/{tweet_id}"

# filter useless tweets includes capitalizing first letters of each keyword
def keywordCheck(target):
    global include, exclude
    for word_ex in exclude:
        if word_ex in target or word_ex.title() in target:
            return False
        else:
            for word_in in include:
                if word_in in target or word_in.title() in target:
                    return True

# write/dump jsonfile
def update_json(stats):
    with open("stats.json", "w") as file:
        json.dump(stats, file)
        file.close()

# write tweet_id
def write_id(last_id):
    global stats
    stats["last_id"] = str(last_id)
    update_json(stats)

# read tweet_id
def read_id():
    global stats
    return stats["last_id"]

# data crawling + output log
def crawl(api):
    
    try: last_id
    except NameError: 
        last_id = read_id()

    response = api.get_home_timeline(since_id=last_id, exclude=["replies","retweets"], expansions='author_id', tweet_fields=["author_id","id"], user_fields = ['username'])
    idx = 0
    if response.meta["result_count"] != 0:
        last_id = response.meta["newest_id"]
        users_dict = {u.id:u for u in response.includes["users"]}
        tweets = response.data
        for tweet in tweets:
            if keywordCheck(tweet.text):
                user = users_dict[tweet.author_id]
                tweet_dict = {"user_name": user.name, "user_username": user.username, "tweet_text":tweet.text, "id":tweet.id}
                tweet_parsed = tweet_format(tweet_dict)
                tweet_parsed_with_idx = f"<b>{idx+1}. </b>" + tweet_parsed
                link = link_format(tweet_dict)
                bot.sendMessage(
                    chat_id = chat_id,
                    text=tweet_parsed_with_idx, 
                    parse_mode="HTML", 
                    reply_markup=tel.InlineKeyboardMarkup([
                        [tel.InlineKeyboardButton(text='View', url=link)],
                        [tel.InlineKeyboardButton(text='Scrap', callback_data=str(idx+1))],
                    ]),
                )
                tweet_dict_idx[idx+1] = f"{tweet_parsed}\n{link}\n\n"
                idx += 1
            else:
                pass
    else:
        pass

    write_id(last_id)
    output_log = f"<b><i>RESULT LOG</i></b>\n<code>picked up: ({response.meta['result_count']}) feeds\nfiltered_out: ({idx}) tweets\nlast_id: {last_id}</code>"
    return tweet_dict_idx, output_log





dispatcher.add_handler(tel_ex.CommandHandler("start", startCommand))
dispatcher.add_handler(tel_ex.CommandHandler("crawl", crawlCommand))
dispatcher.add_handler(tel_ex.CommandHandler("archive", archiveCommand))
dispatcher.add_handler(tel_ex.CommandHandler("filters", filtersCommand))
dispatcher.add_handler(tel_ex.CommandHandler("removenonkeyword", removeNonKeywordCommand))
dispatcher.add_handler(tel_ex.CommandHandler("changelastid", changeLastIDCommand))

dispatcher.add_handler(tel_ex.CallbackQueryHandler(queryHandler))
updater.start_polling()