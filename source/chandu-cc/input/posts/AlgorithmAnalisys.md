Title: Algorithm Analysis
Description: basics of algorithm Analysis.
Lead: Analysis of algorithm.
Tags: Algorithm
IsPost: true
Image: AlgorithmAnalysis.png
By: Chandra kanth
Published: 02 October 2021
---

# Introduction to algorithms

In layman's terms An **algorithm** is a set of instructions to complete a task. With well defined specification of problems with input and output.
We can see algorithms as tools to solve well defined computational problems. 

Some of the **example problems** which can be solved by algorithms :
* Human genome.
* Route finding algorithms.
* Cryptography algorithms based on number theory ( encryption and decryption ).
* Linear programming is used to strategically allocate resources.
  * Oil company wants to know where to place the well for maximum profit
  * Manufacturing and commercial enterprise allocating strategy
  * An airline wants to know the flight in the least expensive way.
  * A political candidate wants to know where to spend money on comagine ads to increase the chance of winning an election.
* Graph algorithms
  * GPS device
* Dynamic programming
  * AI algorithm that plays checkers
* K-nearest neighbors
  * Recommendations system


There are some problems which can not be solved in a timely manner. These problems are categorized as NP-complete problems.

### Abstract Data Type 

A generic low level computer language deals with ones and zeros, boolean logics like ANDs and ORs, IF-statements and GOTO-statements. But an algorithm talks about abstract objects as integers, real numbers, strings, sets, stacks, graphs and trees.

Abstract operations such as **sort the list**, **pop the stack**, logical relationships like greater than, prefix, subset, connected and child 
Every modern programming language  has ADTs built into them. 

### Correctness of an algorithm 

An algorithm is correct for a problem based on the correct output it generates after a series of logical steps it goes through from proper input. The correctness of an algorithm should be transparent.

### Running time of an algorithm


It is not just enough to produce a correct output, It should be completed in a reasonable amount of time and memory space. 

The runtime of an algorithm is a function from the size n of the inputs vs number of operations the computations must do. 

**Feasible** algorithms are time(n) = O(n^2^)  (polynomial).  “BIG OH of n square“  
**Infeasible** algorithms are time(n) =  O(2^n^) (exponential). “BIG OH of 2 rise to n”  


<script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>

<div style="min-heigh:600; min-width:900">
  <canvas id="myChart" width="400" height="400"></canvas>
</div>

<script>
var ctx = document.getElementById('myChart').getContext('2d');


const worstCase = [1,60,70,80,90,100];
const averageCase = [1,40,50,60,70];
const bestCase = [1,10,20,30,40];


// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

const data = {
  labels: [1,2,3,4,5,6],
  datasets: [{
    label: 'Worst Case',
    data: worstCase,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
      tension: 0.4
  },
  {
    label: 'Average Case',
    data: averageCase,
    fill: false,
    borderColor: '#f67019',
      tension: 0.4
  },
  {
    label: 'Best Case',
    data: bestCase,
    fill: false,
    borderColor: '#8549ba',
      tension: 0.4
  }]
};

const config = {
  responsive: true,
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Algorithm Analysis'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Input N"
        },
        suggestedMin: -10,
        suggestedMax: 200
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Number Of Operations'
        },
        suggestedMin: -10,
        suggestedMax: 110
      }
    }
  }
};

var myChart = new Chart(ctx, config);


</script>


**Worst case complexity** : maximum number of steps taken in for size of n.  
**Best case complexity** : minimum number of steps taken in for size of n.  
**Average case complexity**: average number of steps taken in for size of n.  

Worst case complexity is most useful out of this, In best case even worst case algorithms(brute force)  works fine. What happens when we have a larger input size? such that in the worst case.


Best, worst and average case of an algorithm are numerical functions working with them requires precision  Like :
* Ups and downs in a graph ( when we draw this functions on a graph for each case )
* Too many details to specify accurately.

It is much easier to talk in terms of simple **upper** and **lower bounds** of time complexity functions using **“BIG OH”** notations; we can simply ignore details which will not help us in comparing between different algorithms.
