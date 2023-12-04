// get parameter on url
function getParameter(value) {
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    return url.searchParams.get(value);
}

var parameter_week = getParameter('week'), problem_number = 'A';
generateContnet(parameter_week, problem_number)
function getProblemNumber(value) {
    problem_number = value;
    generateContnet(parameter_week, problem_number);
}

// generate problem
function generateContnet(parameter_week, problem_number) {
    console.log(`${parameter_week} ${problem_number}`)
    var problem, code;
    if (parameter_week == 1 && problem_number == 'A') {
problem =
`<h1>PrintText</h1>
<p>Hello World! would be the first program of many programming languages. In C, a simply way to output a string of text is to use the <b>printf</b> function. Usually, we will add a newline character at the end of a sentence. This can be done by the escape sequence <b>‘\\n’</b>. Now, try to write your first C program to provide the specified output.</p>
<br/>
<p id="io">Input</p>
<p>There is no input for this case.</p>
<p id="io">Output</p>
<p>Output the text the same as the sample output.</p>
<p id="io">Sample Input</p>
<p>(no input given)</p>
<p id="io">Sample Output</p>
<p>Make the plan,<br/>
execute the plan,<br/>
expect the plan to go off the rails, and throw away the plan.</p>`;
code =
`#include <stdio.h>

int main() {
    printf("Make the plan,\\nexecute the plan,\\nexpect the plan to go off the rails, and\\nthrow away the plan.");
    return 0;
}`;
    }
    else if (parameter_week == 1 && problem_number == 'B') {
problem =
`<h1>SymbolFigure</h1>
<p>In C, we can draw figures on the console by using symbols. Try to write a program to generate the specified figure by printing symbols.</p>
<p></p>
<br/>
<p id="io">Input</p>
<p>There is no given input.</p>
<p></p>
<p id="io">Output</p>
<p>Output the specified contents the same as sample output.</p>
<p></p>
<p id="io">Sample Input</p>
<p>(no given input)</p>
<p id="io">Sample Output</p>
<p>*<br/>
****<br/>
*******<br/>
**********<br/>
==========<br/>
  *<br/>
 ***<br/>
*****<br/>
 ***<br/>
  *<br/>
==========<br/>
*<br/>
**<br/>
***<br/>
****<br/>
*****<br/>
****<br/>
***<br/>
**<br/>
*<br/>
==========<br/>
    *<br/>
   ***<br/>
  *****<br/>
 *******<br/>
*********<br/>
==========</p>`;
code =
`#include <stdio.h>
#include <stdlib.h>

int main() {
    // graphic 1
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 3 * i + 1; ++j)
            printf("*");
        printf("\\n");
    }
    printf("==========\\n");

    // graphic 2
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < abs(2 - i); ++j)
            printf(" ");
        for (int j = 0; j < 5 - abs(2 - i) * 2; ++j)
            printf("*");
        printf("\\n");
    }
    printf("==========\\n");

    // graphic 3
    for (int i = -4; i <= 4; ++i) {
        for (int j = 0; j < 5 - abs(i); ++j)
            printf("*");
        printf("\\n");
    }
    printf("==========\\n");

    // graphic 4
    for (int i = 0; i < 5; ++i) {
        for (int j = 0; j < 5 - i - 1; ++j)
            printf(" ");
        for (int j = 0; j < i * 2 + 1; ++j)
            printf("*");
        printf("\\n");
    }
    printf("==========\\n");
    return 0;
}`;
    }
    else if (parameter_week == 1 && problem_number == 'C') {
problem =
`<h1>TextFigure</h1>
<p>In C, we can draw figures on the console by using symbols. An advanced application is to use characters as dots to construct symbols. Try to write a program to generate the specified symbols by printing characters.</p>
<br/>
<p id="io">Input</p>
<p>There is no given input.</p>
<p id="io">Output</p>
<p>Output the specified contents the same as sample output. Each “huge” character is formed by 7x7 characters and two “huge” characters are separated by two spaces. The two abbreviations are separated by two lines.</p>
<p id="io">Sample Input</p>
<p>(no given input)</p>
<p id="io">Sample Output</p>
<pre style="font-family: monospace;">
  CCCC    SSSSS    IIIII   EEEEEEE
 C    C  S     S     I     E      
C         S          I     E      
C           S        I     EEEEEEE
C             S      I     E      
 C    C  S     S     I     E      
  CCCC    SSSSS    IIIII   EEEEEEE


FFFFFFF        J    CCCC   U     U
F              J   C    C  U     U
F              J  C        U     U
FFFF           J  C        U     U
F        J     J  C        U     U
F         J    J   C    C  U     U
F          JJJJ     CCCC    UUUUU </pre>
`;
code =
`#include <stdio.h>

int main() {
    printf("  CCCC    SSSSS    IIIII   EEEEEEE\\n");
    printf(" C    C  S     S     I     E      \\n");
    printf("C         S          I     E      \\n");
    printf("C           S        I     EEEEEEE\\n");
    printf("C             S      I     E      \\n");
    printf(" C    C  S     S     I     E      \\n");
    printf("  CCCC    SSSSS    IIIII   EEEEEEE\\n");
    printf("\\n\\n");
    printf("FFFFFFF        J    CCCC   U     U\\n");
    printf("F              J   C    C  U     U\\n");
    printf("F              J  C        U     U\\n");
    printf("FFFF           J  C        U     U\\n");
    printf("F        J     J  C        U     U\\n");
    printf("F         J    J   C    C  U     U\\n");
    printf("F          JJJJ     CCCC    UUUUU \\n");
    return 0;
}`;
    }
    else if (parameter_week == 2 && problem_number == 'A') {
problem =
`<h1>EchoNumbers</h1>
<p>C standard library provides formatted input and formatted output functions. It is quite common to input number for further processing, and this can be done by using the <b>scanf</b> function:<br/>
<b>int number;<br>
scanf(“%d”, &number);</b><br/>
Here, the <b>%d</b> means that we expect there is an integer number at such position. Note that there is an ampersand sign before the integer variable <b>number</b>, and it represents the <b>number</b> is going to be modified.<br/>

The integer value from standard input stream will be stored in the variable <b>number</b>.<br/>

Similarly, to output a number, we can use the <b>printf</b> function:<br/>
<b>printf(“%d”, number);</b><br/>
This statement will output the value stored in <b>number</b> to standard output stream.<br/>

Write a program to retrieve the input numbers from standard input stream and pass them in the same order to standard output stream.</p>

<p id="io">Input</p>
<p>The input has 50 cases and ends with EOF. Each case contains three integers.</p>

<p id="io">Output</p>
<p>For each case, output numbers in the same order of the input. Each two consecutive numbers should be separated by a space character.</p>

<p id="io">Sample Input</p>
<p>1 3 8<br/>
5 6 7<br/>
4 2 9</p>
<p id="io">Sample Output</p>
<p>1 3 8<br/>
5 6 7<br/>
4 2 9</p>
`;
code =
`#include <stdio.h>

int main() {
    int a, b, c;
    while (scanf("%d %d %d", &a, &b, &c) != EOF)
        printf("%d %d %d\\n", a, b, c);
    return 0;
}`;
    }
    else if (parameter_week == 2 && problem_number == 'B') {
problem =
`<h1>Arithmetic</h1>
<p>Arithmetic can be the most common data processing. In C, we can use +, -, *, and / for addition, subtraction, multiplication, and division two numbers, respectively. The results are similar to the mathematics we learned from elementary school, except that the division for integers only takes the integral part. 
Write a program to do calculation of arithmetic.</p>
<p id="io">Input</p>
<p>The input contains ten cases, each of which consist of two integer numbers.</p>
<p id="io">Output</p>
<p>For each case, output the results of applying the four arithmetic operators. Each two consecutive cases should be separated by a line.</p>
<p id="io">Sample Input</p>
<p>4 7<br/> 
5 3</p>
<p id="io">Sample Output</p>
<p>4 + 7 = 11<br/>
4 – 7 = - 3<br/>
4 * 7 = 28<br/>
4 / 7 = 0<br/><br/>
5 + 3 = 8<br/>
5 – 3 = 2<br/>
5 * 3 = 15<br/>
5 / 3 = 1</p>
`;
code =
`#include <stdio.h>

int main() {
    int a, b, is_first_input = 1;
    while (scanf("%d %d", &a, &b) != EOF) {
        if (!is_first_input) printf("\\n");
        printf("%d + %d = %d\\n", a, b, a + b);
        printf("%d - %d = %d\\n", a, b, a - b);
        printf("%d * %d = %d\\n", a, b, a * b);
        printf("%d / %d = %d\\n", a, b, a / b);
        is_first_input = 0;
    }
    return 0;
}`;
    }
    else if (parameter_week == 2 && problem_number == 'C') {
problem =
`<h1>Condition</h1>
<p>Making decision is quite common in programming. In C, we can make a decision by checking the condition through the if statement:<br/>
<b>if (expression) {<br/>
//something you want to do<br/>
}</b><br/>
Here, the <b>expression</b> , representing some condition, can be anything having a value. A common case is the relation between two numbers, i.e., the > , < , ==, >=, and <=, which denote the first operand is greater than, less than, equal to, greater or equal to, less than or equal to, the second operand, respectively.<br/>
Write a program to compare numbers and output their relation.</p>
<p id="io">Input</p>
<p>The input contains 50 cases, each of which consists of two numbers.</p>
<p id="io">Output</p>
<p>For each case, output one of the three relations (>, ==, <) of the two numbers. Each output should be in a separated line.</p>
<p id="io">Sample Input</p>
<p>13<br/>
22<br/>
95</p> 
<p id="io">Sample Output<p>
<p>1 is less than 3.<br/>
2 is equal to 2.<br/>
9 is greater than 5.<p>`;
code =
`#include <stdio.h>

int main() {
    int num1, num2;
    while (scanf("%d %d", &num1, &num2) != EOF) {
        if (num1 < num2) printf("%d is less than %d.\\n", num1, num2);
        else if (num1 == num2) printf("%d is equal to %d.\\n", num1, num2);
        else printf("%d is greater than %d.\\n", num1, num2);
    }
    return 0;
}`;
    }
    else if (parameter_week == 3 && problem_number == 'A') {
problem =
`<h1>RightTriangle</h1>
<p>A simple corollary from Pythagorean theorem is that in a right triangle the square of hypotenuse equals to sum of square of the two legs. Write a program to determine whether a triangle is a right triangle or not by using this corollary.</p>
<p id="io">Input</p>
<p>The input begins with an integer n, indicating the number of cases. Each case contains three integers, which are the lengths of the three sides of a triangle.</p>
<p id="io">Output</p>
<p>For each case, output the description of such triangle in a separate line in the format:<br/>
“The triangle with edges a, b, and c is (not) a right triangle.”</p> 
<p id="io">Sample Input 
<p>3<br/>
2 3 4<br/>
3 4 5<br/>
5 12 13 </p>
<p id="io">Sample Output</p>
<p>The triangle with edges 2, 3, and 4 is not a right triangle.<br/>
The triangle with edges 3, 4, and 5 is a right triangle.<br/>
The triangle with edges 5, 12, and 13 is a right triangle.</p>
`;
code =
`#include <stdio.h>

int main() {
    int n, a, b, c;
    scanf("%d", &n);
    while (n--) {
        scanf("%d %d %d", &a, &b, &c);
        if (a * a + b * b == c * c ||
            b * b + c * c == a * a ||
            a * a + c * c == b * b)
            printf("The triangle with edges %d, %d, and %d is a right triangle.\\n", a, b, c);
        else printf("The triangle with edges %d, %d, and %d is not a right triangle.\\n", a, b, c);
    }
    return 0;
}`;
    }
    else if (parameter_week == 3 && problem_number == 'B') {
problem =
`<h1>Combat</h1>
<p>Card game is a famous type of board game in past decades. As time goes by, we can now play lots of different card games on computers. A well-known and ancient card game is Magic: The Gathering (MTG). In MTG, cards are of different types, including creature, artifact, enchantment, instant, … etc. A special type of cards is creature, which has power and life. If the power of attacking creature is greater than the defending creature, the surplus power can damage the player ’s life, which is 20 at the beginning of a game. Now consider we want to build a platform on computer to compute the result of a battle. Your goal is to write a program to help such calculation.</p>
<p id="io">Input</p>
<p>The input contains several cases and ends with four zeros. Each case contains four integers which denote the attacking creature ’s power and life and defending creature ’s power and life, respectively.</p>
<p id="io">Output</p>
<p>For each case, describe the results in a separate line within the four conditions: 
<p><b>Well attack. Defender vanished, and attacker survived.<br/>
Poor attack. Attacker vanished, but defender survived.<br/>
Ineffective attack. Both survived.<br/>
Sacrificed attack. Both vanished.</b><br/>
In case of attacker taking damage to opponent, output:<br/>
<b>“Attacker caused x damage(s) to opponent player. ”</b>,<br/>
where x is the damage; otherwise, report<br/>
<b>“No damage caused ”.</b></p>
<p id="io">Sample Input</p>
<p>1 5 9 2<br/>
10 9 5 10<br/>
7 6 0 3<br/>
7 2 8 2<br/>
2 8 7 6<br/>
0 0 0 0</p>
<p id="io">Sample Output</p>
<p>Combat 1: Poor attack. Attacker vanished, but defender survived. No damage caused.<br/>
Combat 2: Well attack. Defender vanished, and attacker survived. No damage caused.<br/>
Combat 3: Well attack. Defender vanished, and attacker survived. Attacker caused 4 damages to opponent player.<br/>
Combat 4: Sacrificed attack. Both vanished. Attacker caused 5 damages to opponent player.<br/>
Combat 5: Ineffective attack. Both survived. No damage caused.</p>
`;
code =
`#include <stdio.h>

int main() {
    int attack_power, attack_life, defend_power, defend_life, count = 0;
    while (scanf("%d %d %d %d", &attack_power, &attack_life, &defend_power, &defend_life)) {
        if (!attack_life && !attack_life && !defend_power && !defend_life) break;
        printf("Combat %d: ", ++count);
        if (attack_power >= defend_life && defend_power < attack_life)
            printf("Well attack. Defender vanished, and attacker survived. ");
        else if (defend_power >= attack_life && attack_power < defend_life)
            printf("Poor attack. Attacker vanished, but defender survived. ");
        else if (attack_power < defend_life && defend_power < attack_life)
            printf("Ineffective attack. Both survived. ");
        else
            printf("Sacrificed attack. Both vanished. ");
        if (attack_power > defend_life)
            printf("Attacker caused %d damage%s to opponent player.\\n", attack_power - defend_life, (attack_power - defend_life == 1 ? "" : "s"));
        else
            printf("No damage caused.\\n");
    }
    return 0;
}`;
    }
    else if (parameter_week == 3 && problem_number == 'C') {
problem =
`<h1>FindTheNumber</h1>
<p>During high school, we have learned two well-known sequences, i.e., arithmetic and geometric sequences. In an arithmetic sequence, the difference between any two consecutive numbers in such sequence is the same, while in a geometric sequence, the ratio between any two consecutive numbers in such sequence is the same. Formally, the arithmetic sequence is defined by a starting condition 𝑎[0] and a difference 𝑑 so that 𝑎[𝑛] = 𝑎[𝑛 − 1] + 𝑑. Similarly, the geometric sequence is defined by a starting condition 𝑎[0] and a ratio 𝑟 so that 𝑎[𝑛] = 𝑟 ∙ 𝑎[𝑛 − 1]. Write a program to find out the greatest integer in a sequence which is less than some set number.</p>
<p id="io">Input</p>
<p>The input begins with an integer 𝑛 indicating the number of cases, followed by 𝑛 lines. Each case contains four numbers 𝑡 , 𝑎[0] , 𝑐 , 𝑁 , which denote the sequence type (1 = arithmetic, 2 = geometric), the starting condition, the difference or ratio depending upon the type, and the number to be surpassed.</p>
<p id="io">Output </p>
<p>For each case, output the greatest number in the sequence less than 𝑁 in the format given in sample output.</p>
<p id="io">Sample Input</p>
<p>2<br/>
1 15 20 141<br/>
2 6 13 7062</p>
<p id="io">Sample Output</p>
<p>The greatest number in the arithmetic sequence starting from 15 with difference 20 less than 141 is 135.<br/>
The greatest number in the geometric sequence starting from 6 with ratio 13 less than 7062 is 1014.</p>
`;
code =
`#include <stdio.h>

int main() {
    int n, mode, a1, d, num, s;
    scanf("%d", &n);
    while (n--) {
        scanf("%d %d %d %d", &mode, &a1, &d, &num);
        if (mode == 1) {
            for (s = a1; s + d < num; s += d);
            printf("The greatest number in the arithmetic sequence starting from %d with difference %d less than %d is %d.\\n", a1, d, num, s);
        }
        else {
            for (s = a1; s * d < num; s *= d);
            printf("The greatest number in the geometric sequence starting from %d with ratio %d less than %d is %d.\\n", a1, d, num, s);
        }
    }
    return 0;
}`;
    }
    else if (parameter_week == 4 && problem_number == 'A') {
problem =
`<h1>Tag</h1>
<p>During our childhood, a famous game we have played is the ‘tag’. Tag is a simple game for three or more people that a ghost has to tag someone to transfer the person into ghost. One basic element which determines the number of people one can tag is the speed. More precisely, a ghost can only tag people who have slower speed than it. Write a program to calculate the number of persons which can be caught by a ghost.</p>
<p id="io">Input</p>
<p>The input begins with an integer 𝑚 indicating the number of cases, followed by 𝑚 lines. Each line contains several positive numbers and ends with -1. These positive values in turn indicate the speed of ghost and others.</p>
<p id="io">Output</p>
<p>For each case, output the number of people the ghost can tag by following the format given in sample output.</p>
<p id="io">Sample Input</p>
<p>4<br/>
83 22 17 19 96 -1<br/>
27 72 39 70 13 68 100 36 95 4 -1<br/>
23 34 74 65 -1<br/>
17 36 91 43 89 7 41 43 65 49 47 -1</p>
<p id="io">Sample Output</p>
<p>3 people have been caught.<br/>
2 people have been caught.<br/>
No one has been caught.<br/>
One person has been caught.</p>
`;
code =
`#include <stdio.h>

int main()  {
    int m, ghost, person;
    scanf("%d", &m);
    while (m--) {
        scanf("%d", &ghost);
        int count = 0;
        while (scanf("%d", &person), person != -1)
            if (person < ghost) ++count;
        if (count > 0) {
            if (count == 1) printf("One person has been caught.\\n", count);
            else printf("%d people have been caught.\\n", count);
        }
        else
            printf("No one has been caught.\\n");
    }
    return 0;
}`;
    }
    else if (parameter_week == 4 && problem_number == 'B') {
problem =
`<h1>Adder</h1>
<p>An adder is a device for adding two numbers under some number system. When adding integer numbers, their positions are aligned to the right, and each pair of values at the same position will be added. For a number system with base <i>b</i>, a carry occurred if the sum of the two values at the same position as well as the carry from their previous (right) position is greater than or equal to <i>b</i>. Help to write a program to calculate the addition of two numbers in any base.</p>
<p id="io">Input</p>
<p>The first input contains an integer, denoting the number of cases. Each case contains three integers, representing the base 2 ≤ <i>b</i> ≤ 10 , and the two values to be added, respectively.</p>
<p id="io">Output</p>
<p>For each case, output the sequence during addition according to the format shown in the sample output. Each two consecutive cases are separated by a newline character.</p>
<p id="io">Sample Input</p>
<p>3<br/>
2 1001 11<br/>
3 2012 101<br/>
4 2020 202</p>
<p id="io">Sample Output</p>
<p>Case 1: 1001 + 11 (base 2)<br/>
1 + 1 + 0 = 0 with one carry<br/>
0 + 1 + 1 = 0 with one carry<br/>
0 + 0 + 1 = 1<br/>
1 + 0 + 0 = 1<br/><br/>
Case 2: 2012 + 101 (base 3)<br/>
2 + 1 + 0 = 0 with one carry<br/>
1 + 0 + 1 = 2<br/>
0 + 1 + 0 = 1<br/>
2 + 0 + 0 = 2<br/><br/>
Case 3: 2020 + 202 (base 4)<br/>
0 + 2 + 0 = 2<br/>
2 + 0 + 0 = 2<br/>
0 + 2 + 0 = 2<br/>
2 + 0 + 0 = 2</p>`;
code =
`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int cnt = 1; cnt <= n; ++cnt) {
        int base, value1, value2, carry = 0;
        scanf("%d %d %d", &base, &value1, &value2);
        printf("Case %d: %d + %d (base %d)\\n", cnt, value1, value2, base);
        do {
            int last_num_in_value1 = value1 % 10, last_num_in_value2 = value2 % 10;
            printf("%d + %d + %d = ", last_num_in_value1, last_num_in_value2, carry);
            if (last_num_in_value1 + last_num_in_value2 + carry >= base) {
                printf("%d with one carry\\n", last_num_in_value1 + last_num_in_value2 + carry - base);
                carry = 1;
            }
            else {
                printf("%d\\n", last_num_in_value1 + last_num_in_value2 + carry);
                carry = 0;
            }
            value1 /= 10, value2 /= 10;
        } while (value1 || value2 || carry);
        printf("\\n");
    }
    return 0;
}`;
    }
    else if (parameter_week == 4 && problem_number == 'C') {
problem =
`<h1>SeqLength</h1>
<p>Research on sequence over past centuries has obtained many interesting findings. A famous sequence which can almost converge to one can be given in the following description: “For any input x, if it is odd then multiply it by three and then add it by one; otherwise, divide it by two. ” Write a program to calculate the sequence length for any initial number x.</p>
<p id="io">Input</p>
<p>The input starts with an integer 𝑚 as the number of cases. Each case contains one integer, which denotes the value of 𝑥 .</p>
<p id="io">Output</p>
<p>For each case, output the sequence length y of 𝑥 in the format:<br/>
“The sequence length for x is y.”</p>
<p id="io">Sample Input</p>
<p>2<br/>
6<br/>
8</p>
<p id="io">Sample Output</p>
<p>The sequence length for 6 is 9.<br/>
The sequence length for 8 is 4.</p>
`;
code =
`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    while (n--) {
        int x, length;
        scanf("%d", &x);
        printf("The sequence length for %d is ", x);
        for (length = 1; x != 1; (x % 2) ? (x = x * 3 + 1) : (x /= 2), ++length);
        printf("%d.\\n", length);
    }
    return 0;
}`;
    }
    else if (parameter_week == 5 && problem_number == 'A') {
problem =
`<h1>ConstrainedSum</h1>
<p>Sequence exists everywhere in our life. For example, the students scores, the cost of your shopping list, and bills of your credit cards, all of them can be described as sequences. In that, an important and common work is to sum all the numbers in a sequence. For convenience, it is quite common to show the process of such summation. However, when taking the summation, we may want to filter out some values which exceed (>) a certain scalar. Write a program for figuring out the sum of any sequence and show the equation of the calculation.</p>
<p id="io">Input</p>
<p>The input contains several cases. Each case contains an integer 𝑐 as the constraint, an integer value for sequence length 𝑛 , followed by a sequence of 𝑛 numbers. The input ends in case of length 𝑛 equals to 0.</p>
<p id="io">Output</p>
<p>For each case, output the summation equation for all values less than or equal to 𝑐 , and the result of summation. For any negative number, you should convert it to a subtraction of a positive value rather than an addition of a negative value. If all values are greater than 𝑐 , output <b>“All values have been filtered out.”</b></p>
<p id="io">Sample Input</p>
<p>1 2 -2 3<br/>
2 5 2 -10 9 10 4<br/>
-3 6 3 -4 -3 -2 3 4<br/>
-5 8 8 -1 -1 7 -4 9 3 2<br/>
0 0</p>
<p id="io">Sample Output</p>
<p>-2 = -2<br/>
2 - 10 = -8<br/>
-4 - 3 = -7<br/>
All values have been filtered out.</p>`;
code =
`#include <stdio.h>

int main() {
    int c, n;
    while (scanf("%d %d", &c, &n), c && n) {
        int sequence, sum = 0, is_first_print = 1;
        while (n--) {
            scanf("%d", &sequence);
            if (sequence <= c) {
                if (is_first_print) {
                    printf("%d", sequence);
                    is_first_print = 0;
                }
                else
                    printf(" %c %d", sequence < 0 ? '-' : '+', sequence < 0 ? -sequence : sequence);
                 sum += sequence;
            }
        }
        if (sum) printf(" = %d\\n", sum);
        else printf("All values have been filtered out.\\n");
    }
    return 0;
}`;
    }
    else if (parameter_week == 5 && problem_number == 'B') {
problem =
`<h1>GameOfSubtraction</h1>
<p>A special game of subtraction is to find the minimum times of subtraction for letting the sequence 1, 2, 3, …, n becomes a zero sequence 0, 0, 0, …, 0. When taking subtraction, a limit must be satisfied: the subtraction can be made on any elements of the sequence, but each time only one subtracted value can be chosen for all the elements. For example, consider the sequence:<br/>
1, 2, 3, 4<br/>
We need at least three times to let all values in the sequence become zero, e.g.,<br/>
0, 2, 2, 4 (subtract 1 and 3 by 1)<br/>
0, 0, 0, 2 (subtract 2, 2, and 4 by 2)<br/>
0, 0, 0, 0 (subtract 2 by 2)<br/>
Write a program to calculate the minimum times of subtraction required for an arbitrary value of input 𝑛.<br/>
<p id="io">Input</p>
<p>The input starts with an integer 𝑚 indicating the number of cases. Each case contains one integer value 𝑛.</p>
<p id="io">Output</p>
<p>For each case, output the minimum times of subtraction required for obtaining the zero sequence as mentioned above.</p>
<p id="io">Sample Input</p>
<p>3
4<br/>
16<br/>
255</p>
<p id="io">Sample Output</p>
<p>3<br/>
5<br/>
8</p>
`;
code =
`#include <stdio.h>

int pow_2(int num) {
    int sum = 1;
    for (int i = 0; i < num; ++i) sum *= 2;
    return sum;
}

int log_2(int num) {
    int i;
    for (i = 0; pow_2(i) < num; ++i);
    return i;
}

int main() {
    int m, num;
    scanf("%d", &m);
    while (m--) {
        scanf("%d", &num);
        printf("%d\\n", log_2(num + 1));
    }
    return 0;
}`;
    }
    else if (parameter_week == 5 && problem_number == 'C') {
problem =
`<h1>ApproximateArea</h1>
<p>In high school, we have learned a lot about two dimensional plane with x axis and y axis. In 2D plane, a line can be represented by three parameters, a, b and c, forming the equation ax + by = c. The area below the line can be expressed as ax + by <= c, while the area above the line is ax + by >= c. As the ranges of x axis and y axis are from negative infinity to positive infinity, the size of these two areas are also infinity. However, if we bound x axis and y axis to a range from LB to UB, we can calculate the square area below or above the line as the figure shown below.</p>
<div style="display: flex; justify-content: center">
    <img src="./photo/week05_C_01.png" width="350px">
</div>   
<p>To approximate the area, a simple way is to count the number of discrete points which are beneath or beyond the line. This can be controlled by a directional coefficient d ∈ {−1,1} as a multiplier of c. Write a program to help the calculation of such area.</p>
<p id="io">Input</p>
<p>The input contains several cases and ends with all zeros. Each case contains six integer values, which in turn represent LB, UB, a, b, c and d.</p>
<p id="io">Output</p>
<p>For each case, output the number of points satisfied LB <= x <= UB, LB <= y <= UB, and adx + bdy <= cd for all x, y ∈ Z. The output format is given in sample output. Note that the directional coefficient should only affect the direction of the relation (>= or <=).</p>
<p id="io">Sample Input</p>
<p>0 10 2 3 4 1<br/>
0 10 2 3 4 -1<br/>
0 10 -2 -3 -4 1<br/>
0 10 -2 -3 -4 -1<br/>
0 0 0 0 0 0</p>
<p id="io">Sample Output</p>
<p>The square area within 0 to 10 satisfying 2x+3y<=4 is 4.<br/>
The square area within 0 to 10 satisfying 2x+3y>=4 is 118.<br/>
The square area within 0 to 10 satisfying -2x-3y<=-4 is 118.<br/>
The square area within 0 to 10 satisfying -2x-3y>=-4 is 4.</p>
`;
code =
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int lb, ub, a, b, c, d;
    while (scanf("%d %d %d %d %d %d", &lb, &ub, &a, &b, &c, &d)) {
        if (!lb && !ub && !a && !b && !c && !d) break;
        int count = 0;
        for (int y = lb; y <= ub; ++y)
            for (int x = lb; x <= ub; ++x)
                if (a * d * x + b * d * y <= c * d) ++count;
        printf("The square area within %d to %d satisfying %dx%c%dy%c=%d is %d.\\n", lb, ub, a, b < 0 ? '-' : '+' , abs(b), d == 1 ? '<' : '>', c, count);
    }
    return 0;
}`;
    }
    else if (parameter_week == 6 && problem_number == 'A') {
    
    }
    else if (parameter_week == 6 && problem_number == 'B') {
    
    }
    else if (parameter_week == 6 && problem_number == 'C') {
    
    }
    else if (parameter_week == 7 && problem_number == 'A') {
    
    }
    else if (parameter_week == 7 && problem_number == 'B') {
    
    }
    else if (parameter_week == 7 && problem_number == 'C') {
    
    }
    else if (parameter_week == 8 && problem_number == 'A') {
    
    }
    else if (parameter_week == 8 && problem_number == 'B') {
    
    }
    else if (parameter_week == 8 && problem_number == 'C') {
    
    }
    document.getElementById('problem_content').innerHTML = problem;
    code = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const code_line = code.split('\n');
    var new_code = "";
    for (const line of code_line)
        new_code += "<code>" + line + "</code>\n";
    document.getElementById('code_content').innerHTML = new_code;
}
