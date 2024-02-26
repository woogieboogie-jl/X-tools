import psycopg2
import os
from dotenv import load_dotenv
from psycopg2 import sql


load_dotenv()

# QuickNode Endpoint & Key
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")

# Private Node Endpoint(Xangle)
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")


# Function to establish a database connection
def get_db_connection(DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT):
    try:
        conn = psycopg2.connect(
                host=DB_HOST,
                dbname=DB_NAME, 
                user=DB_USER,
                password=DB_PASSWORD,
                port=DB_PORT
        )
        print("Connected to the database.")
        return conn
    except Exception as e:
        print(f"Unable to connect to the database: {e}")

# Create
def insert_block_reward(timestamp, blocknumber, slot=None, reward_execution_base=None, reward_execution_uncle=None, 
                        reward_consensus_attestation=None, reward_consensus_sync=None, reward_consensus_block=None):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO block_rewards (timestamp, blocknumber, slot, reward_execution_base, reward_execution_uncle, 
                                   reward_consensus_attestation, reward_consensus_sync, reward_consensus_block)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (timestamp, blocknumber, slot, reward_execution_base, reward_execution_uncle, 
              reward_consensus_attestation, reward_consensus_sync, reward_consensus_block))
    conn.commit()
    cur.close()
    conn.close()

# Read
def get_block_rewards():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM block_rewards")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows

# Update - Example: Update the slot for a given blocknumber
def update_slot_by_blocknumber(blocknumber, slot):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        UPDATE block_rewards
        SET slot = %s
        WHERE blocknumber = %s
        """, (slot, blocknumber))
    conn.commit()
    cur.close()
    conn.close()

# Delete - Example: Delete a record by blocknumber
def delete_block_reward_by_blocknumber(blocknumber):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM block_rewards WHERE blocknumber = %s", (blocknumber,))
    conn.commit()
    cur.close()
    conn.close()

# Example usage
if __name__ == "__main__":
    # Insert a new block reward record
    insert_block_reward('2023-01-01 00:00:00', 123456, None, 10, 2, 5, 1, 3)

    # Get all block reward records
    print(get_block_rewards())

    # Update the slot for a specific blocknumber
    update_slot_by_blocknumber(123456, 789)

    # Delete a block reward record by blocknumber
    delete_block_reward_by_blocknumber(123456)

