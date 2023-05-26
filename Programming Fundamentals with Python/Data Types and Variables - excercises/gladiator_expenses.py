lost_fights = int(input())
helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())

costs = 0
shield_break_count = 0

for fight in range(1, lost_fights + 1):

    if fight % 2 == 0:
        costs += helmet_price
        if fight % 3 == 0:
            costs += shield_price
            shield_break_count += 1
            if shield_break_count % 2 == 0:
                costs += armor_price

    if fight % 3 == 0:
        costs += sword_price

print(f"Gladiator expenses: {costs:.2f} aureus")