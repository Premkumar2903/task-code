
n=[10,11,12,13]

for i in n:
    print (i)

# print sum of a list

n=[10,11,12,13]
tot = 0

for i in n:
    tot = tot +i
print(tot)

#count element in a list
count = 0
for i in n:
    count = count +1
print(count)


#to find largest in a list
n=[10,11,12,13] 
large = n[0]

for i in n:
    if  i > large:
        large = i
print (large)