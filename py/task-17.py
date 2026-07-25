import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_excel('Car Sales Dataset.xlsx')
df

#Histogram Bar Price Distribution 
plt.figure(figsize=(8,5))

sns.histplot(df['Price ($)'],bins=20,kde=True,color='green')
plt.title('Distribution of Car Prices')
plt.xlabel('Price ($)')
plt.ylabel('Frequency')
plt.show()



# Bar Chart Average Price by Company 
plt.figure(figsize=(12,6))

avg_price = df.groupby('Company')['Price ($)'].mean().sort_values(ascending=False)

sns.barplot(x=avg_price.values,y=avg_price.index,palette='coolwarm')

plt.title('Average Car Price by Company')
plt.xlabel('Average Price ($)')
plt.ylabel('Company')
plt.show()


#scatter plot Annual Income vs Car Price
plt.figure(figsize=(8,6))

sns.scatterplot(data=df,x='Annual Income',y='Price ($)',hue='Transmission')

plt.title('Annual Income vs Car Price')
plt.show()


#count Car Purchases by Gender
plt.figure(figsize=(6,5))

sns.countplot(data=df,x='Gender',palette='Set2')

plt.title('Car Purchases by Gender')
plt.show()


#Transmission Distribution (Pie Chart)
df['Transmission'].value_counts().plot(kind='pie',autopct='%1.1f%%',figsize=(6,6),colors=['skyblue','orange'])
plt.title('Transmission Type Distribution')
plt.ylabel('')
plt.show()


#Box Plot of Price by Transmission
plt.figure(figsize=(8,5))
sns.boxplot(data=df,x='Transmission',y='Price ($)',palette='pastel')

plt.title('Price Distribution by Transmission')
plt.show()



#Correlation Heatmap relationship between income and price
numeric = df[['Annual Income','Price ($)']]

plt.figure(figsize=(6,4))

sns.heatmap(numeric.corr(),annot=True,cmap='coolwarm',linewidths=0.5)

plt.title('Correlation Heatmap')
plt.show()