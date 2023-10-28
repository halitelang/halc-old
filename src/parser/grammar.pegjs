start
  = statement*

statement
  = functionDefinition / functionCall / prototypeDefinition / prototypeInheritance / chainExpression / defaultArgValues / stringInterpolation / objectCreation / fiberDefinition / fiberBody / awaitExpression / creatingFiberInstance / importing / exporting

functionDefinition
  = "func" identifier typeDeclaration? "(" argsList? ")" "{" statement* "}"

typeDeclaration
  = ":" type

functionCall
  = identifier "(" namedArgList? ")"

prototypeDefinition
  = "prototype" identifier "{" prototypeBody* "}"

prototypeInheritance
  = identifier "extends" identifier "{" prototypeBody* "}"

chainExpression
  = baseExpression chainTail*

chainTail
  = "." (identifier "(" namedArgList? ")" / identifier / "resume" "(" ")")

defaultArgValues
  = identifier typeDeclaration? ":=" expression

stringInterpolation
  = "$\"" sequence* "\""
  
sequence
  = char / interpolation

interpolation
  = "{" expression "}"

char
  = [^\{\}]+  // any character except { or }

objectCreation
  = "new" identifier

fiberDefinition
  = "fiber" identifier typeDeclaration? "(" argsList? ")" "{" statement* "}"

fiberBody
  = "{" statement* "}"

awaitExpression
  = "await" expression

creatingFiberInstance
  = identifier "=" identifier "(" expression? ")"

importing
  = "import" (identifier / "{" identifierList "}" "from" identifier)

exporting
  = "export" (functionDefinition / identifierList) / "export default" functionDefinition

identifier
  = [a-zA-Z_] [a-zA-Z_0-9]*

identifierList
  = identifier ("," identifier)*

argsList
  = identifier typeDeclaration? ("," identifier typeDeclaration?)*

namedArgList
  = identifier ":" expression ("," identifier ":" expression)*

prototypeBody
  = varDeclaration / functionDefinition

varDeclaration
  = "var" identifier typeDeclaration

type
  = identifier

baseExpression
  = functionCall / identifier / stringInterpolation / objectCreation / awaitExpression / creatingFiberInstance / importing / exporting

expression
  = chainExpression
