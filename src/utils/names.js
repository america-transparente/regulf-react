// NameCase
// Copyright (C) 2013-2014 Mason Gravitt

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Original PERL version
// Copyright (c) Mark Summerfield 1998-2008. All Rights Reserved. This program is
// free software; you can redistribute it and/or modify it under the same
// terms as Perl itself.

// This is a customized file merging changes from @emgee/namecase, @compwright/namecase and a PR from @thommeo (https://github.com/emgee3/namecase/pull/7)

// Don't change capitalization unless capitalization isn't set
const checkName = (name) =>
	name === name.toLowerCase() || name === name.toUpperCase();

// Strip out extraneous spaces
const normalize = (name) => name.replace(/\s{2,}/g, ' ');

// Actual case fixing function
function nc(el, opt = {}) {
	el = el.trim().toLowerCase();

	// Split names on regex whitespace, dash or apostrophe, workaround for
	// Javascript regex word boundary \b splitting on unicode characters
	// http://stackoverflow.com/questions/5311618/javascript-regular-expression-problem-with-b-and-international-characters
	const splitters = [
		{ s: /\s/, r: ' ' },
		{ s: /-/, r: '-' },
		{ s: /'/, r: "'" },
		{ s: /"/, r: '"' },
		{ s: /\(/, r: '(' },
		{ s: /\./, r: '.' },
		{ s: /,/, r: ',' },
		{ s: /\//, r: '/' },
	];

	for (let i = 0; i < splitters.length; i++) {
		const elArr = el.split(splitters[i].s);
		for (let j = 0; j < elArr.length; j++) {
			elArr[j] = elArr[j].charAt(0).toUpperCase() + elArr[j].slice(1);
		}
		el = elArr.join(splitters[i].r);
	}

	// Name case Mcs and Macs
	// Exclude names with 1-2 letters after prefix like Mack, Macky, Mace
	// Exclude names ending in a,c,i,o, or j are typically Polish or Italian
	if (/\bMac[A-Za-z]{2,}[^aciozj]\b/.test(el) || /\bMc/.test(el)) {
		el = el.replace(
			/\b(Ma?c)([A-Za-z]+)/,
			(x, y, z) => y + z.charAt(0).toUpperCase() + z.substring(1)
		);

		// Now correct for "Mac" exceptions
		el = el
			.replace(/\bMacEvicius\b/, 'Macevicius')
			.replace(/\bMacHado\b/, 'Machado')
			.replace(/\bMacHar\b/, 'Machar')
			.replace(/\bMacHin\b/, 'Machin')
			.replace(/\bMacHlin\b/, 'Machlin')
			.replace(/\bMacIas\b/, 'Macias')
			.replace(/\bMacIulis\b/, 'Maciulis')
			.replace(/\bMacKie\b/, 'Mackie')
			.replace(/\bMacKle\b/, 'Mackle')
			.replace(/\bMacKlin\b/, 'Macklin')
			.replace(/\bMacQuarie\b/, 'Macquarie')
			.replace(/\bMacOmber\b/, 'Macomber')
			.replace(/\bMacIn\b/, 'Macin')
			.replace(/\bMacKintosh\b/, 'Mackintosh')
			.replace(/\bMacKen\b/, 'Macken')
			.replace(/\bMacHen\b/, 'Machen')
			.replace(/\bMacHiel\b/, 'Machiel')
			.replace(/\bMacIol\b/, 'Maciol')
			.replace(/\bMacKell\b/, 'Mackell')
			.replace(/\bMacKlem\b/, 'Macklem')
			.replace(/\bMacKrell\b/, 'Mackrell')
			.replace(/\bMacLin\b/, 'Maclin')
			.replace(/\bMacKey\b/, 'Mackey')
			.replace(/\bMacKley\b/, 'Mackley')
			.replace(/\bMacHell\b/, 'Machell')
			.replace(/\bMacHon\b/, 'Machon')
			.replace(/\bMacAyla\b/, 'Macayla');
	}

	// And correct Mac exceptions otherwise missed
	el = el
		.replace(/\bMacmurdo/, 'MacMurdo')
		.replace(/\bMacisaac/, 'MacIsaac')

		// Fixes for "son (daughter) of" etc. in various languages.
		.replace(/\bAl(?=\s+\w)\b/g, 'al') // al Arabic or forename Al.
		.replace(/\bAp\b/g, 'ap') // ap Welsh.
		.replace(/\bBen(?=\s+\w)\b/g, 'ben') // ben Hebrew or forename Ben.
		.replace(/\bDell([ae])\b/g, 'dell$1') // della and delle Italian.
		.replace(/\bD([aeiu])\b/g, 'd$1') // da, de, di Italian; du French.
		.replace(/\bDe([lr])\b/g, 'de$1') // del Italian; der Dutch/Flemish.
		.replace(/\bEl\b/g, 'el') // el Greek
		.replace(/\bLa\b/g, 'la') // la French
		.replace(/\bLe(?=\s+\w)\b/g, 'le') // le French
		.replace(/\bLo\b/g, 'lo') // lo Italian
		.replace(/\bVan(?=\s+\w)\b/g, 'van') // van German or forename Van.
		.replace(/\bVon\b/g, 'von') // von Dutch/Flemish

		// Fixes for roman numeral names, e.g. Henry VIII
		.replace(/\b(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b/gi, (v) => v.toUpperCase())

		// Nation of Islam 2X, 3X, etc. names
		.replace(/\b[0-9](x)\b/, (v) => v.toUpperCase())

		// Somewhat arbitrary rule where two letter combos not containing vowels should be capitalized
		// fixes /JJ Abrams/ and /JD Salinger/
		// With some exceptions
		.replace(/\b[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{2}\s/, (v) =>
			v.toUpperCase()
		)
		.replace(/\bMR\.?\b/, 'Mr')
		.replace(/\bMS\.?\b/, 'Ms')
		.replace(/\bDR\.?\b/, 'Dr')
		.replace(/\bST\.?\b/, 'St')
		.replace(/\bJR\.?\b/, 'Jr')
		.replace(/\bSR\.?\b/, 'Sr')
		.replace(/\bLT\.?\b/, 'Lt')

		// lowercase words
		.replace(/\bThe\b/g, 'the')
		.replace(/\bOf\b/g, 'of')
		.replace(/\bAnd\b/g, 'and')

		// spanish
		.replace(/\bY\s\b/g, 'y ')
		.replace(/\bE\s\b/g, 'e ')
		.replace(/\bI\s\b/g, 'i ')
		.replace(/\bDel\s\b/g, 'del ')
		.replace(/\bAl\s\b/g, 'al ')

		// strip extra spaces
		.replace(/\s{2,}/g, ' ');

	// check if we should force the first character to caps
	if (opt.individualFields === true) {
		// first character may be lowercase
		return el;
	}

	// force first character to be uppercase
	return el.charAt(0).toUpperCase() + el.substring(1);
}

function namecase(input, opt) {
	if (Array.isArray(input)) {
		return input.map(namecase);
	}

	if (typeof input === 'string') {
		return nc(input, opt);
	}

	return input;
}

// @ts-ignore
export default namecase;
// @ts-ignore
export { checkName, normalize };

// module.exports = namecase;
// module.exports.checkName = checkName;
// module.exports.normalize = normalize;
