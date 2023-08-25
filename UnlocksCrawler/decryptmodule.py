import json
from Crypto.Cipher import AES
from base64 import b64decode
from pandas import DataFrame as df

key_str = "76be93966ef2ffcc3e5b4bc4636913b0408eeb60b21a8d231077b2f458965a03"
iv_str = "8Z546hjJV7kKvP3M"


def decrypt_aes_data(json_data):
    # Load the encrypted data from the JSON file
    encrypted_data = json_data["data"]['chart']

    # Convert the encrypted data to bytes
    encrypted_data_bytes = bytes.fromhex(encrypted_data)

    # Key and IV used for decryption
    key = bytes.fromhex(key_str)
    iv = iv_str.encode('utf-8')

    # Splitting the IV into nonce and counter components for AES-CTR mode
    nonce_length = len(iv) // 2
    nonce = iv[:nonce_length]
    initial_value = iv[nonce_length:]

    # Decrypt the data using AES-256-CTR with the split nonce and initial value
    cipher = AES.new(key, AES.MODE_CTR, nonce=nonce, initial_value=initial_value)
    decrypted_data_bytes = cipher.decrypt(encrypted_data_bytes)

    # Convert the decrypted data bytes to string
    decrypted_string = decrypted_data_bytes.decode('utf-8', errors='replace')

    return decrypted_string


# Base62 Decoding
def base62_decode(s):
    characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    base = len(characters)
    strlen = len(s)
    num = 0

    idx = 0
    for char in s:
        power = (strlen - (idx + 1))
        num += characters.index(char) * (base ** power)
        idx += 1

    return num

# Decode Functions
def decodeKey(e):
    return base62_decode(e)

def decodeBool(e):
    return e == "b|T"

def decodeNum(e):
    e = e.replace("n|", "")
    if '.' in e:
        parts = e.split('.')
        return [base62_decode(parts[0]), base62_decode(parts[1])]
    return base62_decode(e)

def decodeStr(e):
    prefix = e[0] + e[1]
    if prefix == "s|":
        return e[2:]
    return e

# Main Decryption Logic
def c(e, t):
    if t == "" or t == "_":
        return None
    n = decodeKey(t)
    u = e[n] if n < len(e) else None
    if u is None:
        return u
    if isinstance(u, (int, float)):
        return u
    if isinstance(u, str):
        prefix = u[0] + u[1]
        if prefix == "b|":
            return decodeBool(u)
        elif prefix == "o|":
            obj = {}
            parts = u.split("|")
            sub_key = parts[1]
            sub_value = c(e, sub_key)
            if len(parts) - 2 != 1 and not isinstance(sub_value, list):
                sub_value = [sub_value]
            for i in range(2, len(parts)):
                key = sub_value[i - 2]
                value = c(e, parts[i])
                obj[key] = value
            return obj
        elif prefix == "n|":
            return decodeNum(u)
        elif prefix == "a|":
            arr = []
            parts = u.split("|")
            for i in range(1, len(parts)):
                value = c(e, parts[i])
                arr.append(value)
            return arr
        else:
            return decodeStr(u)
    return None


# decryption for TU
def decrypt_TU(encrypted_json):
    decrypted_string = decrypt_aes_data(encrypted_json)
    e,t = json.loads(decrypted_string)
    return c(e,t)



