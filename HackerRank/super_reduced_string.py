

def has_duplicates(str):
    for i in range(len(str) - 2):
        if str[i] == str[i + 1]:
            return True
    return False

def rem_duplicates(str):
    newStr = ""
    pos = 0
    while pos < (len(str)):
        if pos != (len(str) - 1):
            if str[pos] == str[pos + 1]:
                pos += 2
            else:
                newStr = newStr + str[pos]
                pos += 1
        elif pos == (len(str) - 1):
            newStr = newStr + str[pos]
            pos += 1

    return newStr

def super_reduced_string(str):
    if not str:
        return "Empty String"
    if not has_duplicates(str):
        return str
    else:
        str = rem_duplicates(str)
        return super_reduced_string(str)


mystr = 'aa'
print(has_duplicates(mystr))
print(rem_duplicates(mystr))
print(super_reduced_string(mystr))