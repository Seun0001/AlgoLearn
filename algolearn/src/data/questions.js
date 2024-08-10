export const questions = {
  "bubble-sort": [
    {
      question: "Question 1: What is Bubble Sort?",
      options: [
        "A sorting algorithm that repeatedly steps through the list",
        "A type of search algorithm",
        "A data structure",
        "A mathematical function",
      ],
      correctAnswer: 0,
      explanation:
        "Bubble Sort is a sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    },
    {
      question:
        "Question 2: What is the worst-case time complexity of Bubble Sort?",
      options: ["O(n log n)", "O(n)", "O(n^2)", "O(1)"],
      correctAnswer: 2,
      explanation:
        "The worst-case time complexity of Bubble Sort is O(n^2) because each element is compared with every other element.",
    },
    {
      question:
        "Question 3: What is the best-case time complexity of Bubble Sort?",
      options: ["O(n log n)", "O(n)", "O(n^2)", "O(1)"],
      correctAnswer: 1,
      explanation:
        "The best-case time complexity of Bubble Sort is O(n) when the list is already sorted.",
    },
    {
      question: "Question 4: How does Bubble Sort work?",
      options: [
        "By repeatedly swapping adjacent elements if they are in the wrong order",
        "By merging sorted halves of the list",
        "By dividing the list into halves and recursively sorting each half",
        "By finding the median element and partitioning the list",
      ],
      correctAnswer: 0,
      explanation:
        "Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order, moving the largest unsorted element to its correct position in each pass.",
    },
    {
      question: "Question 5: What type of algorithm is Bubble Sort?",
      options: [
        "Comparison-based sorting algorithm",
        "Divide and conquer algorithm",
        "Greedy algorithm",
        "Dynamic programming algorithm",
      ],
      correctAnswer: 0,
      explanation:
        "Bubble Sort is a comparison-based sorting algorithm because it compares adjacent elements to sort the list.",
    },
  ],
  "merge-sort": [
    {
      question: "Question 1: What is Merge Sort?",
      options: [
        "A sorting algorithm that divides the list into halves",
        "A type of search algorithm",
        "A stack-based data structure",
        "A queue implementation",
      ],
      correctAnswer: 0,
      explanation:
        "Merge Sort is a sorting algorithm that divides the list into halves, recursively sorts them, and then merges the sorted halves.",
    },
    {
      question: "Question 2: What is the time complexity of Merge Sort?",
      options: ["O(n^2)", "O(n log n)", "O(n)", "O(1)"],
      correctAnswer: 1,
      explanation:
        "Merge Sort has a time complexity of O(n log n), which is more efficient than O(n^2) for larger datasets.",
    },
    {
      question: "Question 3: How does Merge Sort work?",
      options: [
        "By recursively dividing the list into halves and merging the sorted halves",
        "By repeatedly swapping adjacent elements if they are in the wrong order",
        "By partitioning the list around a pivot element",
        "By selecting the smallest element and placing it in its correct position",
      ],
      correctAnswer: 0,
      explanation:
        "Merge Sort works by recursively dividing the list into halves, sorting each half, and then merging the sorted halves to produce the final sorted list.",
    },
    {
      question: "Question 4: Is Merge Sort stable?",
      options: ["Yes", "No", "It depends", "Not applicable"],
      correctAnswer: 0,
      explanation:
        "Yes, Merge Sort is a stable sorting algorithm because it maintains the relative order of equal elements.",
    },
    {
      question: "Question 5: What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 1,
      explanation:
        "Merge Sort requires O(n) additional space for the temporary arrays used during the merging process.",
    },
  ],
  "binary-search": [
    {
      question: "Question 1: What is Binary Search?",
      options: [
        "A search algorithm that finds elements in a sorted array",
        "A sorting algorithm",
        "A type of data structure",
        "A mathematical formula",
      ],
      correctAnswer: 0,
      explanation:
        "Binary Search is a search algorithm that finds elements in a sorted array by repeatedly dividing the search interval in half.",
    },
    {
      question: "Question 2: What is the time complexity of Binary Search?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      correctAnswer: 2,
      explanation:
        "Binary Search has a time complexity of O(log n) because it halves the search space with each step.",
    },
    {
      question: "Question 3: What is required for Binary Search to work?",
      options: ["A sorted array", "An unsorted array", "A stack", "A queue"],
      correctAnswer: 0,
      explanation:
        "Binary Search requires a sorted array to function correctly, as it relies on the sorted order to efficiently narrow down the search space.",
    },
    {
      question: "Question 4: What is the space complexity of Binary Search?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correctAnswer: 2,
      explanation:
        "Binary Search has a space complexity of O(1) because it does not require additional space proportional to the size of the input array.",
    },
    {
      question:
        "Question 5: What is the main advantage of Binary Search over linear search?",
      options: [
        "Faster search time for large datasets",
        "Simpler implementation",
        "Requires less memory",
        "Can be applied to unsorted arrays",
      ],
      correctAnswer: 0,
      explanation:
        "The main advantage of Binary Search over linear search is faster search time for large datasets.",
    },
  ],
  stack: [
    {
      question: "Question 1: What is a Stack?",
      options: [
        "A data structure that follows Last In First Out (LIFO) principle",
        "A data structure that follows First In First Out (FIFO) principle",
        "A type of sorting algorithm",
        "A mathematical function",
      ],
      correctAnswer: 0,
      explanation:
        "A Stack is a data structure that follows the Last In First Out (LIFO) principle, where the last element added is the first to be removed.",
    },
    {
      question:
        "Question 2: What operations are typically supported by a Stack?",
      options: [
        "Push and pop",
        "Enqueue and dequeue",
        "Add and remove",
        "Insert and delete",
      ],
      correctAnswer: 0,
      explanation:
        "Stacks typically support the operations 'push' to add an element and 'pop' to remove the most recently added element.",
    },
    {
      question:
        "Question 3: What is the time complexity of push and pop operations in a Stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 0,
      explanation:
        "Both 'push' and 'pop' operations in a Stack have a time complexity of O(1) because they operate on the top element only.",
    },
    {
      question: "Question 4: What is an example use case for a Stack?",
      options: [
        "Expression evaluation and syntax parsing",
        "Sorting algorithms",
        "Searching algorithms",
        "Graph traversal",
      ],
      correctAnswer: 0,
      explanation:
        "Stacks are commonly used in expression evaluation and syntax parsing, such as evaluating arithmetic expressions in postfix notation.",
    },
    {
      question: "Question 5: How is a Stack typically implemented?",
      options: [
        "Using an array or a linked list",
        "Using a queue",
        "Using a hash table",
        "Using a binary tree",
      ],
      correctAnswer: 0,
      explanation:
        "A Stack can be implemented using an array or a linked list, where the array or linked list manages the elements in a LIFO manner.",
    },
  ],
  queue: [
    {
      question: "Question 1: What is a Queue?",
      options: [
        "A data structure that follows First In First Out (FIFO) principle",
        "A data structure that follows Last In First Out (LIFO) principle",
        "A type of sorting algorithm",
        "A mathematical formula",
      ],
      correctAnswer: 0,
      explanation:
        "A Queue is a data structure that follows the First In First Out (FIFO) principle, where the first element added is the first to be removed.",
    },
    {
      question:
        "Question 2: What operations are typically supported by a Queue?",
      options: [
        "Enqueue and dequeue",
        "Push and pop",
        "Add and remove",
        "Insert and delete",
      ],
      correctAnswer: 0,
      explanation:
        "Queues typically support the operations 'enqueue' to add an element and 'dequeue' to remove the oldest element.",
    },
    {
      question:
        "Question 3: What is the time complexity of enqueue and dequeue operations in a Queue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 0,
      explanation:
        "Both 'enqueue' and 'dequeue' operations in a Queue have a time complexity of O(1) because they operate on the front and rear of the queue.",
    },
    {
      question: "Question 4: What is an example use case for a Queue?",
      options: [
        "Managing tasks in a task scheduler",
        "Expression evaluation",
        "Recursive algorithms",
        "Function call management",
      ],
      correctAnswer: 0,
      explanation:
        "Queues are commonly used in task scheduling where tasks are processed in the order they arrive.",
    },
    {
      question: "Question 5: How is a Queue typically implemented?",
      options: [
        "Using an array or a linked list",
        "Using a stack",
        "Using a hash table",
        "Using a binary tree",
      ],
      correctAnswer: 0,
      explanation:
        "A Queue can be implemented using an array or a linked list, where elements are added at the rear and removed from the front.",
    },
  ],
};
