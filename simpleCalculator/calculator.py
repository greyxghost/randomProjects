#Author: greyxghost
#Date: November 3rd, 2024 
#File Contents: This is a basic python program for a calculator.

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Cannot divide by 0."
    return x / y

def main():
    while True: 
        print("============================")
        print("Welcome to Grey's Calculator")
        print("============================")
        print("     Make A Selection")
        print("============================")
        print("")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("")

        selection = input("Enter a Selection from Above: ")

        if selection not in ("1", "2", "3", "4"):
            print("Invalid input: Please enter a valid input between 1 and 4.")
            continue
        
        while True:
            try:
                print("")
                num1 = float(input("Enter the first number: "))
                num2 = float(input("Enter the second number: "))
                print("")
                break 
            except ValueError:
                print("")
                print("Invalid input. Please enter numeric values for both numbers.")

        if selection == "1":
            print(f"The result is: {add(num1, num2)}")
        elif selection == "2":
            print(f"The result is: {subtract(num1, num2)}")
        elif selection == "3":
            print(f"The result is: {multiply(num1, num2)}")
        elif selection == "4":
            print(f"The result is: {divide(num1, num2)}")

        nextCalc = input("Do you want to perform another calculation? [yes/no]: ")
        if nextCalc.lower() == 'no':
            print("Thank you!")
            break 

if __name__ == "__main__":
    main()
