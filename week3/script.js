var bookNames = 
                ["oca_oracle_certified_associate_java_se_8_programme",//Jeanne Boyarsky, Scott Selikoff
                "the_c++_programming_language,_4th_edition",//Bjarne Stroustrup
                "python_programming:_an_introduction_to_computer_science",//John Zelle
                "extreme_programming_pocket_guid",//Ward Cunningham
                "a_smarter_way_to_learn_javaScript",//Mark Myers
                "full_stack_react_projects",//Shama Hoque
                "thinking_in_java",//Bruce Eckel
                "mastering_node_js_second_edition",//Sandro Pasquali
                "sql_quickStart_guide",//ClydeBank Technology
                "the_road_to_learn_react",//Robin Wieruch
                ];
/** Titles:
 * OCA Oracle Certified Associate Java SE 8 Programme 
 * The C++ Programming Language, 4th Edition
 * Python Programming: An Introduction to Computer Science
 * Extreme Programming Pocket Guid
 * A Smarter Way to Learn JavaScript
 * Full-Stack React Projects:Modern web development using React 16, Node, Express, and MongoDB
 * Thinking in Java
 * Mastering Node.js Second Edition
 * SQL quick start guide
 * The road to learn React
*/

// console.log(bookNames);
// write books id on HTML from an array
function createUl(arr){
    var ul = document.createElement('ul');
    document.body.appendChild(ul)
    for (let i=0; i<arr.length; i++){
      var li = document.createElement('li');
      li.setAttribute('id', i);
      li.innerHTML = arr[i];
      ul.appendChild(li);
    }
  }

//   createUl(bookNames);

// books object
var books = {
    oca_oracle_certified_associate_java_se_8_programme:
    {
        title: "OCA Oracle Certified Associate Java SE 8 Programme",
        language: "english",
        author: "Jeanne Boyarsky"
    },
    the_cplusplus_programming_language,_4th_edition:
    {
        title: "The C++ Programming Language, 4th Edition",
        language: "english",
        author: "Bjarne Stroustrup"
    },
    
    python_programming_an_introduction_to_computer_science:
    {
        title: "Python Programming: An Introduction to Computer Science",
        language: "english",
        author: "John Zelle"
    },
    extreme_programming_pocket_guid:
    {
        title: "Extreme Programming Pocket Guid",
        language: "english",
        author: "Ward Cunningham"
    },

    a_smarter_way_to_learn_javaScript:
    {
        title: "A Smarter Way to Learn JavaScript",
        language: "english",
        author: "Mark Myers"
    },

    full_stack_react_projects:
    {
        title: "Full-Stack React Projects:Modern web development using React 16, Node, Express, and MongoDB",
        language: "english",
        author: "Shama Hoque"
    },

    thinking_in_java:
    {
        title: "Thinking in Java",
        language: "english",
        author: "Bruce Eckel"
    },

    mastering_node_js_second_edition:
    {
        title: "Mastering Node.js Second Edition",
        language: "english",
        author: "Sandro Pasquali"
    },

    sql_quickStart_guide:
    {
        title: "SQL quick start guide",
        language: "english",
        author: "ClydeBank Technology"
    },
                
                
    the_road_to_learn_react:
    {
        title: "The road to learn React",
        language: "english",
        author: "Robin Wieruch"
    },

}