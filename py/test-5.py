
#class attribute
color='white'

#1
class vehicle():
    pass
    def __init__(self):
        self.color = 'white'

def vehile(self):
    print('vehicle color',self.color)

#2
class bus(vehicle):
    pass

class car(vehicle):
    pass

#3
volvo=bus()
volvo.color

tata=car()
tata.color



#4
class country:
    country='usa'

 #5   
class bank:
    currency = 'USD' 

class SavingsAccount(bank):
    currency = 'Pounds'

class CheckingAccount(bank):
    currency = 'Rupees'

ch=CheckingAccount()
ch.currency = 'euro'
ch.currency



#6
class car:
    def __init__(self,__engine_number):
        #private attribute can't overwrite
        self.__engine_number =  __engine_number

    def get_engine_number(self):
        return self.__engine_number

c1=car(26)

c1.__engine_number = 33  #can't overwrite

c1.get_engine_number()



#7
from abc import ABC,abstractmethod
class Animal(ABC):

    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return 'boww'   #implementation

class Cat(Animal):
    def speak(self):
        return 'meoww'   #implementation 

d1=Dog()
d1.speak()

c1=Cat()
c1.speak()


#8
class vehicle():
    def __init__(self,max_speed,mileage):
        self.max_speed = max_speed
        self.mileage = mileage

    def details(self):
        print('speed:', self.max_speed)
        print('mileage:', self.mileage)

car = vehicle(210,15)
car.details()




#9
class add:
    def __init__(self,num):
        self.num = str(num)

    def calculate(self):

        total = 0

        for i in self.num:
            total = total+(int(i)**2)

        return total

number = int(input('enter the 3-digit number:'))

o1 = add(number)
print(o1.calculate())