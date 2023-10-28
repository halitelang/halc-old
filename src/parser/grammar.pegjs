start
  = statement*

statement
  = functionDefinition / functionCall / prototypeDefinition / prototypeInheritance / methodCall / defaultArgValues / stringInterpolation / objectCreation / propertyAccess / fiberDefinition / fiberBody / awaitKeyword / creatingFiberInstance / resumingFiber / importing / exporting / moduleResolution

functionDefinition
  = "func" identifier "(" argsList? ")" "{" statement* "}"

functionCall
  = identifier "(" namedArgList? ")"

prototypeDefinition
  = "prototype" identifier "{" prototypeBody* "}"

prototypeInheritance
  = identifier "extends" identifier "{" prototypeBody* "}"

methodCall
  = expression "." identifier "(" namedArgList? ")"

defaultArgValues
  = identifier ":" type "=" expression

// stringInterpolation
//   = "$\"" (char / "{" expression "})* "\""

objectCreation
  = "new" identifier

propertyAccess
  = expression "." identifier

fiberDefinition
  = "fiber" identifier "(" argsList? ")" "{" statement* "}"

fiberBody
  = "{" statement* "}"

awaitKeyword
  = "await" expression

creatingFiberInstance
  = identifier "=" identifier "(" expression? ")"

resumingFiber
  = expression "." "resume" "(" ")"

importing
  = "import" (identifier / "{" identifierList "}" "from" identifier)

exporting
  = "export" (functionDefinition / identifierList) / "export default" functionDefinition

moduleResolution
  = // Module resolution will require additional context or external mechanisms and may not be expressible solely within the grammar.

// identifier
//   = [a-zA-Z_] [a-zA-Z_0-9]*

// identifierList
// = identifier ("," identifier)*

// argsList
//   = identifier ":" type ("," identifier ":" type)*

// namedArgList
//   = identifier ":" expression ("," identifier ":" expression)*

// prototypeBody
//   = varDeclaration / functionDefinition

// varDeclaration
//   = "var" identifier ":" type

// type
//   = identifier