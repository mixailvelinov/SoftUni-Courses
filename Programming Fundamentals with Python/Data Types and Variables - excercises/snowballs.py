number_of_snowballs = int(input())

best_w, best_t, best_q, best_g = 0, 0, 0, 0
weight, time_needed, grade, quality = 0, 0, 0, 0

for snowball in range(1, number_of_snowballs + 1):

    weight = int(input())
    time_needed = int(input())
    quality = int(input())

    grade = (weight / time_needed) ** quality

    if grade > best_g:
        best_g = grade
        best_w = weight
        best_t = time_needed
        best_q = quality

print(f"{best_w} : {best_t} = {int(best_g)} ({best_q})")



