var Year1=["Integers",
"Factors and Multiples",
"Fractions and Decimals",
"Real Numbers and Approximation",
"Basic Algebra and Algebraic Manipulation",
"Linear Algebraic Equations",
//"Linear Graphs and Practical Applications Part 1 and 2",
"Statistics (Data Handling and Analysis)",
"Basic Geometrical Properties and Polygons Part 1 and 2",
//"Geometrical Construction",
"Perimeter and Area of Plane Figures",
"Volume and Surface Area of Cylinders and Prisms",
"Percentage",
//"Rate, Ratio and Proportion"
];
var Year2=[/*"Rate, Ratio and Proportion",
"Simultaneous Linear Equations",
"Expansion and Factorisation of Quadratic Expressions",
"Further Expansion and Factorisation of Quadratic Expressions",
"Quadratic Equations and Graphs",
"Pythagoras' Theorem",
"Algebraic Fractions and Formulae",
"Volume and Surface Area of Solid Figures",
"Standard Form and Indices",
"Trigonometric Ratio",
"Linear Inequalities",
"Set Theory",
"Graphs in Practical Application"*/];
function fillSearch(id){
    for(var i=0;i<Year1.length;i++){
        document.getElementById(id).innerHTML+="<li>"+CBL(Year1[i],"/Grades/Year_"+1+"/"+replace(Year1[i])+".html",20)+"</li>";
    }
    for(var i=0;i<Year2.length;i++){
        document.getElementById(id).innerHTML+="<li>"+CBL(Year2[i],"/Grades/Year_"+2+"/"+replace(Year2[i])+".html",20)+"</li>";
    }
}
function replace(str){
    var res=str;
    for(var i=0;i<res.length;i++)if(res[i]==" ")res[i]="_";
    return res;
}