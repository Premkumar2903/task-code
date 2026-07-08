from sympy import symbols, Lambda

x,y,z = symbols('x y z')

f1 = Lambda((x,y,z), (x+y+z)** 2)
print(f1(1,2,3))

s = Lambda((x,y),(x-y)**2)
print(s(6,2))


cu = Lambda((x,y),(x+y)**3)
print(cu(3,2))