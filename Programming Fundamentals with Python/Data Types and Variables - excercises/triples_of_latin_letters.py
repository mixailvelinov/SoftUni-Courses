number = int(input())
char = "a"

for num in range(number):
    for num_2 in range(number):
        for num_3 in range(number):
            print(f"{chr(97 + num)}{chr(97 + num_2)}{chr(97 + num_3)}")


