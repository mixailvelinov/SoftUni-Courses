number_of_lines = int(input())

capacity = 255
filled_amount = 0
poured_water = 0

for n in range(number_of_lines):
    poured_water = int(input())

    if poured_water > capacity - filled_amount:
        print(f"Insufficient capacity!")
        continue

    filled_amount += poured_water

print(filled_amount)