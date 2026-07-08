

#return muti values in function
def data():
    name = 'prem'
    age = 22
    return (name,age)

data()


#arthmatic calacultor
def add(a,b):
    return(a+b)

add(5,5)


def sub(a,b):
    return(a-b)

sub(5,5)


def multi(a,b):
    return(a*b)

multi(5,5)


def divide(a,b):
    return(a/b)

divide(5,5)


#prime number
def prime(n):
    if n <=1:
        return False
    
    for i in range(2,n):
        if n % i == 0:
            return False
    
        else:
             return True
        
prime(2)


#even no using lambda
e = lambda a,b :a+b

e(2,2)

n=[1,2,3,4,5,6]
ev = list(filter(lambda a : a %2== 0 , n))

print(ev)