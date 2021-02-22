with open("calendar3-input.txt") as f:
    data = [line.strip()*100 for line in f.readlines()]

tree_count = 0
x = 0
y = 0

for i in data:
    if '#' in i[x]:
        tree_count +=1
    x += 3

print(tree_count)
