Title: Introduction to language processing and phases of compiler Part - 2
Description: continuation of part 1
Lead: Introduction to basic concepts 
Tags: compiler
IsPost: true
By: Chandra kanth
ImageUrl: https://i.imgur.com/o9PlA65.png
Published: 20 September 2021
---

# Language processing

Before we start understanding the phases of the compiler we need to have a basic understanding of automata theory.

Automata theory is the study of abstract computing devices or machines before there were computers in the late 1930s.

**Automata** : The purpose of a state is to remember the relevant portion of a system's history. Since there are only a finite number of states. we could implement a state of automata as  hardware as a circuit or as a simple form of program.

**Example** : A nontrivial finite automaton is an on/off switch.


# A little part of computer science History.

I want to introduce Alan Turing. He is considered to be the father of computer science. Alan studied abstract machines that have all the capabilities of today’s computers. Turing's goal was to describe precisely what a computing machine could do and what it could not do.

His conclusions apply to not only abstract computers but today's modern computers too. In the late 1940s to 1950s finite automata were used to model brain functions [Research Paper](https://www.sciencedirect.com/science/article/abs/pii/S0020737375800137).

In the **late 1950s**, a linguist named [N. Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky) began the study of formal “grammar”. These are not machines but these grammars have a close relationship with abstract automata. These grammars are an important part of modern software components.

In **1969**, [S. Cook](https://en.wikipedia.org/wiki/Stephen_Cook) extended Turning's study of computing. He was able to separate those problems that can be solved efficiently by computers from the problems that can be solved but take so much time that computers are useless. These problems are classified as “NP-hard” problems. Even if we have the hardware according to [Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law) we could not even solve these problems.

> All this research led to the modern computing age.

**Turning machine** helps us understand what we can expect from the software. The theory of intractable problems will help us decide to head-on and write a program to solve it.

**Finite automata** are useful models which help us **create software** for designing and **checking the digital circuits**, **lexical analyzer**, **scanning large bodies of text**, **verifying systems**, **communication protocols**, and **protocols encryption**.


# Syntax Definition

A context-free grammar is used to specify/define the syntax of a language. known as grammar. It is made up  of _terminals_, _nonterminals_, a _start symbol_, and _production_.

> Let consider an example of palindromes expressed in context-free grammar notation.

Below are the rules for a palindrome string.

|  rules      |
|-------------|
|P   →   ε    |
|P   →   0    |
|P   →   1    |
|P   →    0P0 |
|P   →   1P1  |

Palindromes include the string ε, 0, and 1.  The last two rules form the indicative part of the definition.

CFG as G has four components

G =  ( V, T, P, S) where.

**T - Terminals**  basic symbols from which strings are formed. “Token name” is a almost the same as“terminal”. Tokens are the first components of the output of the token by the lexical analyzer. Terminals are the base of all the symbols in the grammar.

In the _example_ above This set was {0,1}. We call this alphabet/terminals/terminal symbols all mean the same thing

**V -  NonTerminals**  a finite set of variables, also sometimes called syntactic variables.Set of strings of terminals are represented by each non-terminal. This belongs to syntactic categories.

In the _example_ above there was only one variable, P, which we used to represent the class of palindromes over the alphabet {0,1}.

**S - Start Symbol** one of the variables represents the language being defined; it is called the start symbol.

In the _example_ above the only variable P, is the start symbol.

**P - Production** finite set of production or rules that represent the recursive definition of a language.

> Where each production consists of:
  _nonterminal_:- called the head  
  _arrow_:- left side of the production  
  _sequence_:- of terminals &&/|| nonterminals called the body

**Production symbol**:   →

The grammar for G(palindrome) for the palindromes is represented by  
G(palindrome) = ({p}, {0,1}, A,P) where A represents the set of productions.


# Parse Trees 

shows how a **start symbol** of grammar derives a string in the language.

If nonterminal A has a production A   →  XY Z, then a parse tree may have an interior node labeled A with three children labeled X, Y , and Z, from left to right:

<a href="https://imgur.com/HhW9jxf">
<img src="https://i.imgur.com/HhW9jxf.png" title="source: imgur.com" />
</a>

Learn more about tree data structure  here, Tree (data structure)

Formally, given a context-free grammar, a parse tree according to the grammar is a tree with the following properties:

1. The root node is labeled by the start symbol of the grammer.

2. Each leaf is labeled by a terminal or by  ε.

3. Each interior node is labeled by a non-terminal of the grammar. 

4. If A is the non-terminal labeling some interior node and M1,  M2,....Mn are the labels of the children of that node from left to right, then there must be a production  A   →   M1 M2…... Mn. Here,

M1, M2…..Mn. Here, M1, M2,......, MN each stands for a symbol that is either a terminal or a nonterminal. As a special case, if A   →  ε  is a production,   then a node labeled A may have a single child labeled.

# Syntax-Directed Translation

**Analysis phase** breaks up the program into pieces and produces an internal representation for it, called intermediate code. **Synthesis phase**  translates/compiles the IC(intermediate code) into the target program. **Analysis** is broken down to “**syntax**” , “**semantics**” . Syntax of a programming language describes the form of its programs. Semantics of languages defines what its programs mean. For specifying  syntax we used notation called **context-free grammars** or **BNF** ( Backus-Naur Forms)

Grammar-oriented compiling technique called **syntax-directed translation**.
**Syntax-Directed Translation** to evaluate expressions and to build syntax trees for programming constructs.

> SDT is a huge topic on it’s own which is outside the scope of this blog post, I will add a link here once I blog about it. 

For now just take a look at an example. Since we already know what CFG is, the same grammar is used in SDT but with some rules or language construct attached to the grammar called as attributes which are known as Syntax-Directed Definition (SSD).

If N is a symbol and k is one of its attributes, Then we write N.k to denote the value of a at a particular parse-tree. Attributes may be of any kind, numbers, types, table references or strings and code (IL).

> Wiki 
Syntax-directed translation refers to a method of compiler implementation where the source language translation is completely driven by the parser.

**Example** :- 
Let us define a grammar that we can translate a basic arithmetic expression from infix-to-postfix. Production rules will look like below.

**Production rule.**  
E → E1 + T

**Semantic rule.**
E.Code  = E1.Code || T.Code || ‘+’ 

E and T are nonterminals according to CFG and E, E1 and T has a string-valued attribute code

<a href="https://imgur.com/o9PlA65">
<img src="https://i.imgur.com/o9PlA65.png" title="source: imgur.com" />
</a>

i will try to give you overview of above diagram. Later we will implement with C#/Typescript some of the phases, Maybe we will bulid a simulator that gives developer ability to build languages on the fly with visual studio code.

# Front End Phase

**Lexical analyzer** 

Lexical analyzer reads the source program and groups them into lexemes and generates the tokens for each lexem.

**Syntax analyzer**

A syntax of programming language constructs can be specified by context-free grammar or BNF notation.

* Grammar gives precise and easy understanding of syntactic specification of programming language.
* A known structure ( structure imparted ) to a language by a specific grammar is useful to translate from source to object notation.
* Grammar helps language to evolve.

syntactic structure of a well-formed programming language.

A program is made up of functions, a function is made up of declarations and statements. A statement out of expressions.

In layman's terms when we make any syntactic error like missing a semicolon  or misspelled keywords which can be analyzed and handle the error and throw them back all the analyzed errors.  

CFG : are used to define the grammatical rules of the language.

**Algorithms** : -
* Top-down parsing 
  * Prase tree .
* Bottom-up parsing:
  * Prase tree.

**Tools** :-
* [yacc](https://www.man7.org/linux/man-pages//man1/yacc.1p.html)
* [lex](https://man7.org/linux/man-pages/man1/lex.1p.html)

**Lex-yacc** :-
* Is used to produce lexical analyzers.

**Semantic analyzer** Analyzes the meaning of the code.

**Intermediate code generator**

Will generate the three address code. Uses DAG, direct acrylic graph.
We perform this operation in this phase, type checking, conversions, overloading of function and operators, control flow, switch statements.

# Optional End

**Code Optimizer**

Compiler optimization of intermediate code uses DAG to represent the basic blocks.

Elements the code on principle of graph theory.
Note that all of this optimization are performed on three address instruction assemblies like language.

Algorithms :-
* Graph coloring
* Graph theory.
* DAG
* Peephole optimization.

# Back End

**Code Generator**

Takes the IR ( intermediate representation ) by the front end of the compiler along with relevant symbol table information.

**Machine Dependent code optimizer**

Uses the sample principles has code optimizer phase. Uses the graph theory, depth first ordering of flow graphs, classifications of edges, flow graphs, depth first order.
