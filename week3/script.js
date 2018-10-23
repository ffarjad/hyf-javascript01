var bookNames = 
                ["oca_oracle_certified_associate_java_se_8_programme",//Jeanne Boyarsky, Scott Selikoff
                "the_c++_programming_language,_4th_edition",//Bjarne Stroustrup
                "python_programming:_an_introduction_to_computer_science",//John Zelle
                "extreme_programming_pocket_guid",//Ward Cunningham
                "a_smarter_way_to_learn_javaScript",//Mark Myers
                "full-stack_react_projects",//Shama Hoque
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