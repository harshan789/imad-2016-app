var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 'article': {
    title: 'article one- Harshan',
    heading:'article',
    date:'sep 5 2016',
    content:`<p>
              This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
              </p>
              <p>
              This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
              </p>
              <p>
              This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.
              </p>`
     
 },
          
         
  'two': { 
     title: 'article two- Harshan',
    heading:'two',
    date:'sep 10 2016',
    content:`<p>
              This is the content of my second article.This is the content of my second article.This is the content of my second article.</p>`
              },
 'three':{
     title: 'article three- Harshan',
    heading:'two',
    date:'sep 15 2016',
    content:`<p>
              This is the content of my third article.This is the content of my third article.This is the content of my third article.
              </p>`
              }
              
 };
 
function createTemplate (data){
    var title=data.title;
    var date =data.date;
    var heading=data.heading;
    var content=data.content;

  var htmlTemplate =`<html>
 <head>
     <title>
        ${title}
     </title>
    <link href="/ui/style.css" rel="stylesheet" />
     
 </head>
 
  <body>
     <div class="container">
          <div>
          <a href="/">Home</a>
      </div>
      <hr/>
      <h3>
      ${heading}
      </h3>
      <div>
          ${date}
      </div>
      <div>
          ${content}
      </div>
  </div>
  </body>  
    
    
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName will be article
    //articles[articleName]={} content object for article
    var articleName=req.param.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'two.html'));
});
app.get('/three',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
