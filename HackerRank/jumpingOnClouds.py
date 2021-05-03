import math

def jumpingOnClouds(c):
    pos = 0
    jumps = 0
    tot_clouds = c[0]
    arr = c[1]

    while pos < tot_clouds - 1:
        if (pos < tot_clouds - 2) and (arr[pos + 2] == 0):
            jumps += 1
            pos += 2
        elif arr[pos + 1] == 0:
            jumps += 1
            pos += 1
        else:
            raise ValueError("Game Cannot Be Won.")

    return jumps


input = (6, [0, 0, 0, 0, 1, 0])

print(jumpingOnClouds(input))