let questions = [
    {
      numb: 1,
      question: "What is (void*)0?",
      answer: "NULL pointer",
      options: [
        "void pointer",
        "NULL pointer",
        "Error",
        "None of above"
      ]
    },
      {
      numb: 2,
      question: " can you combine the two statements into one? <br> char *p; <br> p = (char*)malloc(100);",
      answer: "char *p = (char*)malloc(100);",
      options: [
        "char p = *malloc(100);",
        "char *p = (char) malloc(100);",
        "char *p = (char*)malloc(100);",
        "char *p = (char *)(malloc*)(100);"
      ]
    },
    {
      numb: 3,
      question: "A pointer is",
      answer: "A variable that stores address of other variable",
      options: [
        "A keyword used to create variables",
        "A variable that stores address of an instruction",
        "A variable that stores address of other variable",
        "All of the above"
      ]
    },
      {
      numb: 4,
      question: "The operator used to get value at address stored in a pointer variable is",
      answer: "*",
      options: [
        "*",
        "&",
        "$",
        "&&"
      ]
    },
      {
      numb: 5,
      question: "Point out the compile time error in the program given below.<br> #include<stdio.h> <br>int main(){ int *x;<br>*x=100;<br>return 0;}",
     
      answer: "No error",
      options: [
        "Error: invalid assignment for x",
        "Error: suspicious pointer conversion",
        "No error",
        "None of above"
      ]
    },
      
  ];