# print sum of a list

n=[10,11,12,13]
tot = 0

for i in n:
    tot = tot +i
print(tot)


#count spaces in string
n = 'hi hello how are you..'
space = 0 
for i in n:
    if i == ' ':
        space = space + 1

print(space)

#print char with index

name = 'prem'

for i in range (len(name)):
    print(i,name[i])


#Count digits in string  ("a1b2c3") use .isdigit()

str = 'a1b2c345'
count = 0

for i in str:
   if i.isdigit():
       count += 1
print(count)


#reverse a sring
n ='ola'
rev =''

for i in n:
    rev = i + rev

print(rev)


#to count largest in list
n= [3,7,2,9,5]
large = n[0]

for i in n:
    if i > large:
        large = i

print(large)

# Count words in string
w= 'i love python program'
count = 0
for i in w.split():
    count += 1

print(count)

#find the common elements in list
a = [1, 2, 3, 4]
b = [3, 4, 5]

c = []

for i in a:
    if i in b:
        c.append(i)

print(c)