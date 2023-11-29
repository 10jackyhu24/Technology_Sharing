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
`#include &lt;stdio.h&gt;

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
<p>*</p>
<p>****</p>
<p>*******</p>
<p>**********</p>
<p>==========</p>
<p>  *</p>
<p> ***</p>
<p>*****</p>
<p> ***</p>
<p>  *</p>
<p>==========</p>
<p>*</p>
<p>**</p>
<p>***</p>
<p>****</p>
<p>*****</p>
<p>****</p>
<p>***</p>
<p>**</p>
<p>*</p>
<p>==========</p>
<p>    *</p>
<p>   ***</p>
<p>  *****</p>
<p> *******</p>
<p>*********</p>
<p>==========</p>`;
code =
`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

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
`#include &lt;stdio.h&gt;

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
    
    }
    else if (parameter_week == 2 && problem_number == 'B') {
    
    }
    else if (parameter_week == 2 && problem_number == 'C') {
    
    }
    else if (parameter_week == 3 && problem_number == 'A') {
    
    }
    else if (parameter_week == 3 && problem_number == 'B') {
    
    }
    else if (parameter_week == 3 && problem_number == 'C') {
    
    }
    else if (parameter_week == 4 && problem_number == 'A') {
    
    }
    else if (parameter_week == 4 && problem_number == 'B') {
    
    }
    else if (parameter_week == 4 && problem_number == 'C') {
    
    }
    else if (parameter_week == 5 && problem_number == 'A') {
    
    }
    else if (parameter_week == 5 && problem_number == 'B') {
    
    }
    else if (parameter_week == 5 && problem_number == 'C') {
    
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
    const code_line = code.split('\n');
    var new_code = "";
    for (const line of code_line)
        new_code += "<code>" + line + "</code>\n";
    document.getElementById('code_content').innerHTML = new_code;
}
