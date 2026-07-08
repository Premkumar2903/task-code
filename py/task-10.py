#even nos using lambda
e = lambda a,b :a+b

e(2,2)

n=[1,2,3,4,5,6]

ev = list(filter(lambda a : a %2== 0 , n))

print(ev)

# positive numbers

n = [-10,9,-8,34,0]

print(list(filter(lambda a:a>0, n)))

#by for loop
for i in n:
    if(i>0):
        print(i)