var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Sean Maley, M.A.  Associate Professor of Mathematics  SUNY Finger Lakes       "
},
{
  "id": "derivative-rules",
  "level": "1",
  "url": "derivative-rules.html",
  "type": "Section",
  "number": "1.1",
  "title": "Rules For Basic Function Derivatives",
  "body": " Rules For Basic Function Derivatives  Why Do We Care?  One of the major goals, now that we know what the derivative is, is to be able to find the derivative for all the functions we know. We start with some basic ones, using the definition, and we'll unpack them as we go.   What Will We Learn?  After we generate \"rules\" for each function we know, then we will be able to use them to solve problems without needing the big ugly limit definition anymore   Things To Recall  We will use the limit definition of the derivative for a general function, and algebraically work them into simpler rules. That's the whole idea.   The Main Idea  Here's a 30ish minute lecture video walking through some of these.    Pro-Tips  You will be asked to do this for a basic function on the final. But these are not worth memorizing. What is worth memorizing is the definition, and what it really means in its **3 interpretations** as a rate, slope, and sensitivity.   Get Your Hands Dirty   2.1 Exercises #1-13  2.1 Thread on Practice Problems    "
},
{
  "id": "sine-cosine-rules",
  "level": "1",
  "url": "sine-cosine-rules.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sine and Cosine Derivatives",
  "body": " Sine and Cosine Derivatives  Why Do We Care?  Sine and cosine model virtually everything that fluctuates. They are fundamental functions and so understanding their derivatives will be key to solving problems involving circular motion, periodic relationships, signals and waves, etc.   What Will We Learn?  The derivative formulas for Sine, Cosine, and Tangent, and where they come from.   Things To Recall  Remember that \"vanilla\" Sine graph starts at the midline-->Max-->midline-->min-->midline.  Remember that \"vanilla\" Cosine graph starts at the Max-->midline-->min-->midline-->Max   The Main Idea  Here's a 15 minute lecture video unpacking these derivatives.    Pro-Tips  Memorizing these is important, and ...but only after that you can make sense of why it is the way it is.   Get Your Hands Dirty   2.2 Exercises #1-8  Discourse Q+A    "
},
{
  "id": "prod-quot-rules",
  "level": "1",
  "url": "prod-quot-rules.html",
  "type": "Section",
  "number": "1.3",
  "title": "Product and Quotient Rules for Derivatives",
  "body": " Product and Quotient Rules for Derivatives  Why Do We Care?  As we learn to differentiate all the functions we know, we also need to understand that they come in *combinations* like sums, differences, products, quotients (and eventually, compositions, but that's a bit later).  More interesting problems or situations are typically not just one function, but a combination. So that's why this is important to understand.   What Will We Learn?  How to differentiate products and quotients of functions, i.e. and .   Things To Recall  That since both f(x) and g(x) are changing, that the derivative is not just simply f'(x)g'(x), which is a very common mistake.  It is more nuanced than this, and we go over this idea in the video.   The Main Idea  Here's a 15 minute lecture video introducing these rules. Practice is going to be indispensable here (as it always is).    Pro-Tips  Remember (fg)' is not f'g'! Both functions are changing, think of the rectangle.   Get Your Hands Dirty   2.3 Exercises #1-14  Discourse Q+A    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
