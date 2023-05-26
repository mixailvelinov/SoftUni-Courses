number_of_lines = int(input())

total_sum = 0

for num in range(number_of_lines):
    line = input()
    total_sum += ord(line)

print(f"The sum equals: {total_sum}")
