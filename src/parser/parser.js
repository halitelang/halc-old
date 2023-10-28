/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleIndices = { start: 0 },
      peg$startRuleIndex   = 0,

      peg$consts = [
        "func",
        peg$literalExpectation("func", false),
        "(",
        peg$literalExpectation("(", false),
        ")",
        peg$literalExpectation(")", false),
        "{",
        peg$literalExpectation("{", false),
        "}",
        peg$literalExpectation("}", false),
        ":",
        peg$literalExpectation(":", false),
        "prototype",
        peg$literalExpectation("prototype", false),
        "extends",
        peg$literalExpectation("extends", false),
        ".",
        peg$literalExpectation(".", false),
        "resume",
        peg$literalExpectation("resume", false),
        ":=",
        peg$literalExpectation(":=", false),
        "$\"",
        peg$literalExpectation("$\"", false),
        "\"",
        peg$literalExpectation("\"", false),
        /^[^{}]/,
        peg$classExpectation(["{", "}"], true, false),
        "new",
        peg$literalExpectation("new", false),
        "fiber",
        peg$literalExpectation("fiber", false),
        "await",
        peg$literalExpectation("await", false),
        "=",
        peg$literalExpectation("=", false),
        "import",
        peg$literalExpectation("import", false),
        "from",
        peg$literalExpectation("from", false),
        "export",
        peg$literalExpectation("export", false),
        "export default",
        peg$literalExpectation("export default", false),
        /^[a-zA-Z_]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], "_"], false, false),
        /^[a-zA-Z_0-9]/,
        peg$classExpectation([["a", "z"], ["A", "Z"], "_", ["0", "9"]], false, false),
        ",",
        peg$literalExpectation(",", false),
        "var",
        peg$literalExpectation("var", false)
      ],

      peg$bytecode = [
        peg$decode("$;!0#*;!&"),
        peg$decode(";\".k &;$.e &;%._ &;&.Y &;'.S &;).M &;*.G &;..A &;/.; &;0.5 &;1./ &;2.) &;3.# &;4"),
        peg$decode("%2 \"\"6 7!/\x94#;5/\x8B$;#.\" &\"/}$2\"\"\"6\"7#/n$;7.\" &\"/`$2$\"\"6$7%/Q$2&\"\"6&7'/B$$;!0#*;!&/2$2(\"\"6(7)/#$+))()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2*\"\"6*7+/,#;5/#$+\")(\"'#&'#"),
        peg$decode("%;5/O#2\"\"\"6\"7#/@$;8.\" &\"/2$2$\"\"6$7%/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%2,\"\"6,7-/Z#;5/Q$2&\"\"6&7'/B$$;90#*;9&/2$2(\"\"6(7)/#$+%)(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;5/i#2.\"\"6.7//Z$;5/Q$2&\"\"6&7'/B$$;90#*;9&/2$2(\"\"6(7)/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%;;/3#$;(0#*;(&/#$+\")(\"'#&'#"),
        peg$decode("%20\"\"6071/\x9C#%;5/O#2\"\"\"6\"7#/@$;8.\" &\"/2$2$\"\"6$7%/#$+$)($'#(#'#(\"'#&'#.W &;5.Q &%22\"\"6273/A#2\"\"\"6\"7#/2$2$\"\"6$7%/#$+#)(#'#(\"'#&'#/#$+\")(\"'#&'#"),
        peg$decode("%;5/I#;#.\" &\"/;$24\"\"6475/,$;'/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode("%26\"\"6677/B#$;+0#*;+&/2$28\"\"6879/#$+#)(#'#(\"'#&'#"),
        peg$decode(";-.# &;,"),
        peg$decode("%2&\"\"6&7'/;#;'/2$2(\"\"6(7)/#$+#)(#'#(\"'#&'#"),
        peg$decode("$4:\"\"5!7;/,#0)*4:\"\"5!7;&&&#"),
        peg$decode("%2<\"\"6<7=/,#;5/#$+\")(\"'#&'#"),
        peg$decode("%2>\"\"6>7?/\x94#;5/\x8B$;#.\" &\"/}$2\"\"\"6\"7#/n$;7.\" &\"/`$2$\"\"6$7%/Q$2&\"\"6&7'/B$$;!0#*;!&/2$2(\"\"6(7)/#$+))()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2&\"\"6&7'/B#$;!0#*;!&/2$2(\"\"6(7)/#$+#)(#'#(\"'#&'#"),
        peg$decode("%2@\"\"6@7A/,#;'/#$+\")(\"'#&'#"),
        peg$decode("%;5/g#2B\"\"6B7C/X$;5/O$2\"\"\"6\"7#/@$;'.\" &\"/2$2$\"\"6$7%/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
        peg$decode("%2D\"\"6D7E/r#;5.c &%2&\"\"6&7'/S#;6/J$2(\"\"6(7)/;$2F\"\"6F7G/,$;5/#$+%)(%'#($'#(#'#(\"'#&'#/#$+\")(\"'#&'#"),
        peg$decode("%2H\"\"6H7I/2#;\".# &;6/#$+\")(\"'#&'#.< &%2J\"\"6J7K/,#;\"/#$+\")(\"'#&'#"),
        peg$decode("%4L\"\"5!7M/?#$4N\"\"5!7O0)*4N\"\"5!7O&/#$+\")(\"'#&'#"),
        peg$decode("%;5/e#$%2P\"\"6P7Q/,#;5/#$+\")(\"'#&'#0<*%2P\"\"6P7Q/,#;5/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
        peg$decode("%;5/\x8F#;#.\" &\"/\x81$$%2P\"\"6P7Q/:#;5/1$;#.\" &\"/#$+#)(#'#(\"'#&'#0J*%2P\"\"6P7Q/:#;5/1$;#.\" &\"/#$+#)(#'#(\"'#&'#&/#$+#)(#'#(\"'#&'#"),
        peg$decode("%;5/\xAD#2*\"\"6*7+/\x9E$;'/\x95$$%2P\"\"6P7Q/D#;5/;$2*\"\"6*7+/,$;'/#$+$)($'#(#'#(\"'#&'#0T*%2P\"\"6P7Q/D#;5/;$2*\"\"6*7+/,$;'/#$+$)($'#(#'#(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
        peg$decode(";:.# &;\""),
        peg$decode("%2R\"\"6R7S/5#;5/,$;#/#$+#)(#'#(\"'#&'#"),
        peg$decode(";$.G &;5.A &;*.; &;..5 &;1./ &;2.) &;3.# &;4")
      ],

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$resultsCache = {},

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleIndices)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleIndex = peg$startRuleIndices[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$decode(s) {
    var bc = new Array(s.length), i;

    for (i = 0; i < s.length; i++) {
      bc[i] = s.charCodeAt(i) - 32;
    }

    return bc;
  }

  function peg$parseRule(index) {
    var bc    = peg$bytecode[index],
        ip    = 0,
        ips   = [],
        end   = bc.length,
        ends  = [],
        stack = [],
        params, i;

    var key    = peg$currPos * 28 + index,
        cached = peg$resultsCache[key];

    if (cached) {
      peg$currPos = cached.nextPos;

      return cached.result;
    }

    while (true) {
      while (ip < end) {
        switch (bc[ip]) {
          case 0:
            stack.push(peg$consts[bc[ip + 1]]);
            ip += 2;
            break;

          case 1:
            stack.push(void 0);
            ip++;
            break;

          case 2:
            stack.push(null);
            ip++;
            break;

          case 3:
            stack.push(peg$FAILED);
            ip++;
            break;

          case 4:
            stack.push([]);
            ip++;
            break;

          case 5:
            stack.push(peg$currPos);
            ip++;
            break;

          case 6:
            stack.pop();
            ip++;
            break;

          case 7:
            peg$currPos = stack.pop();
            ip++;
            break;

          case 8:
            stack.length -= bc[ip + 1];
            ip += 2;
            break;

          case 9:
            stack.splice(-2, 1);
            ip++;
            break;

          case 10:
            stack[stack.length - 2].push(stack.pop());
            ip++;
            break;

          case 11:
            stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
            ip += 2;
            break;

          case 12:
            stack.push(input.substring(stack.pop(), peg$currPos));
            ip++;
            break;

          case 13:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1]) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 14:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] === peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 15:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (stack[stack.length - 1] !== peg$FAILED) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 16:
            if (stack[stack.length - 1] !== peg$FAILED) {
              ends.push(end);
              ips.push(ip);

              end = ip + 2 + bc[ip + 1];
              ip += 2;
            } else {
              ip += 2 + bc[ip + 1];
            }

            break;

          case 17:
            ends.push(end);
            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

            if (input.length > peg$currPos) {
              end = ip + 3 + bc[ip + 1];
              ip += 3;
            } else {
              end = ip + 3 + bc[ip + 1] + bc[ip + 2];
              ip += 3 + bc[ip + 1];
            }

            break;

          case 18:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 19:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 20:
            ends.push(end);
            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

            if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
              end = ip + 4 + bc[ip + 2];
              ip += 4;
            } else {
              end = ip + 4 + bc[ip + 2] + bc[ip + 3];
              ip += 4 + bc[ip + 2];
            }

            break;

          case 21:
            stack.push(input.substr(peg$currPos, bc[ip + 1]));
            peg$currPos += bc[ip + 1];
            ip += 2;
            break;

          case 22:
            stack.push(peg$consts[bc[ip + 1]]);
            peg$currPos += peg$consts[bc[ip + 1]].length;
            ip += 2;
            break;

          case 23:
            stack.push(peg$FAILED);
            if (peg$silentFails === 0) {
              peg$fail(peg$consts[bc[ip + 1]]);
            }
            ip += 2;
            break;

          case 24:
            peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
            ip += 2;
            break;

          case 25:
            peg$savedPos = peg$currPos;
            ip++;
            break;

          case 26:
            params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
            for (i = 0; i < bc[ip + 3]; i++) {
              params[i] = stack[stack.length - 1 - params[i]];
            }

            stack.splice(
              stack.length - bc[ip + 2],
              bc[ip + 2],
              peg$consts[bc[ip + 1]].apply(null, params)
            );

            ip += 4 + bc[ip + 3];
            break;

          case 27:
            stack.push(peg$parseRule(bc[ip + 1]));
            ip += 2;
            break;

          case 28:
            peg$silentFails++;
            ip++;
            break;

          case 29:
            peg$silentFails--;
            ip++;
            break;

          default:
            throw new Error("Invalid opcode: " + bc[ip] + ".");
        }
      }

      if (ends.length > 0) {
        end = ends.pop();
        ip = ips.pop();
      } else {
        break;
      }
    }

    peg$resultsCache[key] = { nextPos: peg$currPos, result: stack[0] };

    return stack[0];
  }

  peg$result = peg$parseRule(peg$startRuleIndex);

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
