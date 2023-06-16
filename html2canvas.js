/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Publicado bajo licencia MIT
 */

(función (global, fábrica) {
    typeof export === 'objeto' && typeof module !== 'indefinido' ? módulo.exportaciones = fábrica() :
    typeof define === 'función' && define.amd ? definir (fábrica):
    (global = typeof globalThis !== 'indefinido' ? globalThis : global || self, global.html2canvas = factory());
}(esto, (función () { 'usar estricto';


    /*! **************************************************** ***************************
    Derechos de autor (c) Microsoft Corporation.

    Permiso para usar, copiar, modificar y/o distribuir este software para cualquier
    por la presente se otorga el propósito con o sin cargo.

    EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y EL AUTOR RENUNCIA A TODAS LAS GARANTÍAS CON
    CON RESPECTO A ESTE SOFTWARE, INCLUYENDO TODAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD
    Y APTITUD. EN NINGÚN CASO EL AUTOR SERÁ RESPONSABLE DE CUALQUIER DATO ESPECIAL, DIRECTO,
    DAÑOS INDIRECTOS O CONSECUENTES O CUALQUIER DAÑO RESULTANTE DE
    PÉRDIDA DE USO, DATOS O BENEFICIOS, YA SEA EN ACCIÓN DE CONTRATO, NEGLIGENCIA O
    OTRA ACCIÓN AGRAVIOSA, QUE SURJA DE O EN RELACIÓN CON EL USO O
    RENDIMIENTO DE ESTE SOFTWARE.
    **************************************************** *************************** */
    /* reflexión global, promesa */

    var extenderStatics = function(d, b) {
        extendStatics = Objeto.setPrototypeOf ||
            ({ __proto__: [] } instancia de Array && función (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p en b) if (Objeto.prototipo.tienePropiedad.llamada(b, p)) d[p] = b[p]; };
        devuelve extenderStatics(d, b);
    };

    función __extiende(d, b) {
        if (tipo de b !== "función" && b !== nulo)
            throw new TypeError("La clase extiende el valor " + String(b) + " no es un constructor o nulo");
        extenderEstadísticas(d, b);
        function __() { this.constructor = d; }
        d.prototipo = b === nulo? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __asignar = función() {
        __asignar = Objeto.asignar || función __asignar(t) {
            for (var s, i = 1, n = argumentos.longitud; i < n; i++) {
                s = argumentos[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            devolver t;
        };
        return __assign.apply(esto, argumentos);
    };

    function __awaiter(thisArg, _argumentos, P, generador) {
        función adoptar(valor) { valor devuelto instancia de P ? valor: nueva P (función (resolver) { resolver (valor); }); }
        volver nuevo (P || (P = Promesa))(función (resolver, rechazar) {
            función cumplida (valor) { probar { paso (generador.siguiente (valor)); } atrapar (e) { rechazar (e); } }
            función rechazada (valor) { probar { paso (generador ["lanzar"] (valor)); } atrapar (e) { rechazar (e); } }
            función paso(resultado) { resultado.hecho ? resolver(resultado.valor) : adopt(resultado.valor).entonces(cumplido, rechazado); }
            paso((generador = generador.aplicar(esteArg, _argumentos || [])).siguiente());
        });
    }

    function __generator(thisArg, cuerpo) {
        var _ = { etiqueta: 0, enviado: function() { if (t[0] & 1) throw t[1]; devuelve t[1]; }, intentos: [], operaciones: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { devolver esto; }), g;
        función verbo(n) { return función (v) { return paso([n, v]); }; }
        función paso(op) {
            if (f) throw new TypeError("El generador ya se está ejecutando");
            mientras (_) intente {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                cambiar (op[0]) {
                    caso 0: caso 1: t = op; romper;
                    caso 4: _.etiqueta++; return {valor: op[1], hecho: falso};
                    caso 5: _.etiqueta++; y = op[1]; operación = [0]; continuar;
                    caso 7: op = _.ops.pop(); _.trys.pop(); continuar;
                    por defecto:
                        if (!(t = _.trys, t = t.longitud > 0 && t[t.longitud - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continuar; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; romper; }
                        if (op[0] === 6 && _.etiqueta < t[1]) { _.etiqueta = t[1]; t = op; romper; }
                        if (t && _.etiqueta < t[2]) { _.etiqueta = t[2]; _.ops.empujar(op); romper; }
                        si (t[2]) _.ops.pop();
                        _.trys.pop(); continuar;
                }
                op = body.call(thisArg, _);
            } atrapar (e) { op = [6, e]; y = 0; } finalmente { f = t = 0; }
            if (op[0] & 5) throw op[1]; devolver {valor: op[0]? op[1] : void 0, hecho: verdadero };
        }
    }

    function __spreadArray(hacia, desde, paquete) {
        if (paquete || argumentos.longitud === 2) for (var i = 0, l = desde.longitud, ar; i < l; i++) {
            if (ar || !(i desde)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = de[i];
            }
        }
        volver a.concat(ar || de);
    }

    var Límites = /** @clase */ (función () {
        Función Límites (izquierda, arriba, ancho, alto) {
            esto.izquierda = izquierda;
            esto.superior = superior;
            este.ancho = ancho;
            esta.altura = altura;
        }
        Límites.prototipo.añadir = función (x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
        };
        Bounds.fromClientRect = función (contexto, clientRect) {
            devolver nuevos límites (clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
        };
        Bounds.fromDOMRectList = función (contexto, domRectList) {
            var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
            volver domRect
                ? nuevos límites (domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height)
                : Límites.VACÍO;
        };
        Límites.VACÍO = nuevos Límites (0, 0, 0, 0);
        límites de retorno;
    }());
    var parseBounds = función (contexto, nodo) {
        return Bounds.fromClientRect(context, node.getBoundingClientRect());
    };
    var parseDocumentSize = función (documento) {
        var cuerpo = documento.cuerpo;
        var documentElement = documento.documentElement;
        if (!cuerpo || !documentElement) {
            throw new Error("No se pudo obtener el tamaño del documento");
        }
        var ancho = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
        var altura = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
        devuelve nuevos límites (0, 0, ancho, alto);
    };

    /*
     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var toCodePoints$1 = función (str) {
        var puntos de código = [];
        var i = 0;
        var longitud = str.longitud;
        while (i <longitud) {
            valor var = str.charCodeAt(i++);
            if (valor >= 0xd800 && valor <= 0xdbff && i <longitud) {
                var extra = str.charCodeAt(i++);
                si ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((valor y 0x3ff) << 10) + (extra y 0x3ff) + 0x10000);
                }
                demás {
                    codePoints.push(valor);
                    i--;
                }
            }
            demás {
                codePoints.push(valor);
            }
        }
        puntos de código de retorno;
    };
    var fromCodePoint$1 = función () {
        var puntos de código = [];
        for (var _i = 0; _i < argumentos.longitud; _i++) {
            codePoints[_i] = argumentos[_i];
        }
        if (Cadena.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var longitud = codePoints.longitud;
        si (!longitud) {
            devolver '';
        }
        var unidades de código = [];
        índice var = -1;
        var resultado = '';
        while (++índice <longitud) {
            var codePoint = codePoints[índice];
            si (punto de código <= 0xffff) {
                codeUnits.push(codePoint);
            }
            demás {
                punto de código -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (índice + 1 === longitud || unidades de código.longitud > 0x4000) {
                resultado += String.fromCharCode.apply(String, codeUnits);
                códigoUnidades.longitud = 0;
            }
        }
        resultado devuelto;
    };
    var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Usa una tabla de búsqueda para encontrar el índice.
    var lookup$2 = typeof Uint8Array === 'indefinido' ? [] : nuevo Uint8Array(256);
    for (var i$2 = 0; i$2 < caracteres$2.longitud; i$2++) {
        buscar$2[chars$2.charCodeAt(i$2)] = i$2;
    }

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Usa una tabla de búsqueda para encontrar el índice.
    var buscar $ 1 $ 1 = tipo de Uint8Array === 'indefinido'? [] : nuevo Uint8Array(256);
    for (var i$1$1 = 0; i$1$1 < caracteres$1$1.longitud; i$1$1++) {
        buscar$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    }
    var decodificar$1 = función (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, codificado1, codificado2, codificado3, codificado4;
        si (base64[base64.longitud - 1] === '=') {
            bufferLength--;
            si (base64[base64.longitud - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = tipo de ArrayBuffer !== 'indefinido' &&
            tipo de Uint8Array !== 'indefinido' &&
            typeofUint8Array.prototype.slice !== 'indefinido'
            ? nuevo ArrayBuffer(bufferLength)
            : nueva matriz (bufferLength);
        var bytes = Array.isArray(buffer) ? búfer: nuevo Uint8Array (búfer);
        para (i = 0; i < len; i += 4) {
            codificado1 = buscar$1$1[base64.charCodeAt(i)];
            codificado2 = buscar$1$1[base64.charCodeAt(i + 1)];
            codificado3 = buscar$1$1[base64.charCodeAt(i + 2)];
            codificado4 = buscar$1$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (codificado1 << 2) | (codificado2 >> 4);
            bytes[p++] = ((codificados2 y 15) << 4) | (codificado3 >> 2);
            bytes[p++] = ((codificados 3 y 3) << 6) | (codificado 4 y 63);
        }
        búfer de retorno;
    };
    var polyUint16Array$1 = función (búfer) {
        var longitud = buffer.longitud;
        var bytes = [];
        para (var i = 0; i < longitud; i += 2) {
            bytes.push((búfer[i + 1] << 8) | búfer[i]);
        }
        devolver bytes;
    };
    var polyUint32Array$1 = función (búfer) {
        var longitud = buffer.longitud;
        var bytes = [];
        para (var i = 0; i < longitud; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        devolver bytes;
    };

    /** Tamaño de desplazamiento para obtener el desplazamiento de la tabla de índice 2. */
    var UTRIE2_SHIFT_2$1 = 5;
    /** Tamaño de desplazamiento para obtener el desplazamiento de la tabla de índice 1. */
    var UTRIE2_SHIFT_1$1 = 6 + 5;
    /**
     * Tamaño de desplazamiento para desplazar a la izquierda los valores de la matriz de índice.
     * Aumenta el tamaño de datos posible con valores de índice de 16 bits al costo
     * de compactabilidad.
     * Esto requiere que los bloques de datos estén alineados por UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT$1 = 2;
    /**
     * Diferencia entre los dos tamaños de turno,
     * para obtener una compensación de índice 1 a partir de una compensación de índice 2. 6=11-5
     */
    var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
    /**
     * La parte de la tabla index-2 para U+D800..U+DBFF almacena valores para
     * código sustituto de plomo _unidades_ no código _puntos_.
     * Los valores para el código sustituto principal _puntos_ están indexados con esta parte de la tabla.
     * Longitud=32=0x20=0x400>>UTRIE2_SHIFT_2. (Hay 1024=0x400 sustitutos principales).
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
    /** Número de entradas en un bloque de datos. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
    /** Máscara para obtener los bits inferiores para el desplazamiento del bloque de datos. */
    var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
    /** Cuenta las longitudes de ambas piezas BMP. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
    /**
     * La versión UTF-8 de 2 bytes de la tabla index-2 sigue en el desplazamiento 2080=0x820.
     * Longitud 32=0x20 para bytes iniciales C0..DF, independientemente de UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 es el primer punto de código después de UTF-8 de 2 bytes */
    /**
     * La tabla de índice 1, solo se usa para puntos de código complementarios, en el desplazamiento 2112=0x840.
     * Longitud variable, para puntos de código hasta highStart, donde comienza el último rango de valor único.
     * Longitud máxima 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (Para 0x100000 puntos de código suplementarios U+10000..U+10ffff.)
     *
     * La parte de la tabla de índice 2 para puntos de código suplementarios comienza
     * después de esta tabla de índice-1.
     *
     * Tanto la tabla de índice-1 como la siguiente parte de la tabla de índice-2
     * se omiten por completo si solo hay datos BMP.
     */
    var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
    /**
     * Número de entradas de índice 1 para el BMP. 32=0x20
     * Esta parte de la tabla índice-1 se omite del formulario serializado.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
    /** Número de entradas en un bloque de índice-2. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
    /** Máscara para obtener los bits inferiores para el desplazamiento en el índice de 2 bloques. */
    var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
    var slice16$1 = función (ver, iniciar, finalizar) {
        if (ver.segmento) {
            return view.slice(inicio, final);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32$1 = función (ver, iniciar, finalizar) {
        if (ver.segmento) {
            return view.slice(inicio, final);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64$1 = función (base64, _byteLength) {
        var búfer = decodificar $ 1 (base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array$1(búfer) : nuevo Uint32Array(búfer);
        var view16 = Array.isArray(buffer) ? polyUint16Array$1(búfer) : nuevo Uint16Array(búfer);
        longitud del encabezado var = 24;
        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
        var datos = vista32[5] === 2
            ? rebanada16$1(vista16, (longitud del encabezado + vista32[4]) / 2)
            : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie$1 = /** @clase */ (función () {
        función Trie (valor inicial, valor de error, inicio alto, índice de valor alto, índice, datos) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            este.índice = índice;
            esto.datos = datos;
        }
        /**
         * Obtener el valor de un punto de código almacenado en el Trie.
         *
         * @param codePoint el punto de código
         * @retorna el valor
         */
        Trie.prototype.get = función (codePoint) {
            varix;
            si (punto de código >= 0) {
                if (punto de código < 0x0d800 || (punto de código > 0x0dbff && punto de código <= 0x0ffff)) {
                    // Punto de código BMP ordinario, excluyendo sustitutos principales.
                    // BMP utiliza una búsqueda de un solo nivel. El índice BMP comienza en el desplazamiento 0 en el índice Trie2.
                    // Los datos de 16 bits se almacenan en la propia matriz de índice.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    devolver este.datos[ix];
                }
                si (punto de código <= 0xffff) {
                    // Punto de código sustituto principal. Se almacena una sección de índice separada para
                    // liderar unidades de código sustituto y puntos de código.
                    // El índice principal tiene los datos de la unidad de código.
                    // Para esta función, necesitamos los datos del punto de código.
                    // Nota: esta expresión podría refactorizarse para mejorar ligeramente la eficiencia, pero
                    // los puntos de código sustitutos serán tan raros en la práctica que no vale la pena.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    devolver este.datos[ix];
                }
                if (codePoint < this.highStart) {
                    // Punto de código complementario, use búsqueda de dos niveles.
                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                    ix = este.índice[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                    ix = este.índice[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    devolver este.datos[ix];
                }
                si (punto de código <= 0x10ffff) {
                    devuelve this.data[this.highValueIndex];
                }
            }
            // Caer a través. El punto de código está fuera del rango legal de 0..0x10ffff.
            devolver este.errorValue;
        };
        volver Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Usa una tabla de búsqueda para encontrar el índice.
    var lookup$3 = typeof Uint8Array === 'indefinido' ? [] : nuevo Uint8Array(256);
    for (var i$3 = 0; i$3 < caracteres$3.longitud; i$3++) {
        buscar$3[chars$3.charCodeAt(i$3)] = i$3;
    }

    var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkAS wBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4Arw CxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUA dQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1 AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANGEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUSFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BceFwQXHBcEFwQX PBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACz B7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/CGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0ga WCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAA IAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAa ABoAGgAaABoAGgAaABoAGgaaaABoAGgaaABoAEjDqABWw6bDqABpg6gaaABoAHcDvwOPA+gaaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/ A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUadQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACCKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQ BeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1A CELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LS QswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADA AMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUadQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwAdaamaawadaaamaawadaamaawadaaamaawadaaamaawadaawadaaamaawadaamaaWahuadQB1AHUADQB1AHUADQB1AHUADQB1AHUADQBYDHUADQB1AF8MMAAWADAAMAAWADAAMAAWADADAAWADAAMAB1AHUADQB1AHUADQB1AHUADQB1AHUADQB1AHUADQBB1AHUADQBB1AHUADQBB1AHUADQBB1AHUADQBB1AHUADQBB1AHUAD.MAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSB tIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLACCD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG 0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gb SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAw ADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeAB SAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcaAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKw ArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcaAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKw ArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsA==';

    var LETRA_NUMERO_MODIFICADOR = 50;
    // Clases de ruptura de línea no personalizables
    var BK = 1; // Causa un salto de línea (después)
    var CR$1 = 2; // Causa un salto de línea (después), excepto entre CR y LF
    var LF$1 = 3; // Causa un salto de línea (después)
    varCM = 4; // Prohibir un salto de línea entre el carácter y el carácter anterior
    var NL = 5; // Causa un salto de línea (después)
    var WJ = 7; // Prohibir saltos de línea antes y después
    var ZW = 8; // Proporcionar una oportunidad de descanso
    varGL = 9; // Prohibir saltos de línea antes y después
    var SP = 10; // Habilitar saltos de línea indirectos
    var ZWJ$1 = 11; // Prohibir saltos de línea dentro de secuencias de unión
    // Oportunidades de descanso
    var B2 = 12; // Proporcione una oportunidad de salto de línea antes y después del carácter
    var BA = 13; // Generalmente proporciona una oportunidad de salto de línea después del carácter
    var BB = 14; // Generalmente proporciona una oportunidad de salto de línea antes del carácter
    var HY = 15; // Proporcione una oportunidad de salto de línea después del carácter, excepto en contexto numérico
    var CB = 16; // Proporcione una oportunidad de salto de línea dependiendo de información adicional
    // Caracteres que prohíben ciertos descansos
    var CL = 17; // Prohibir saltos de línea antes
    var PC = 18; // Prohibir saltos de línea antes
    var EX = 19; // Prohibir saltos de línea antes
    var EN = 20; // Permitir solo saltos de línea indirectos entre pares
    var NS = 21; // Permitir solo saltos de línea indirectos antes
    var OP = 22; // Prohibir saltos de línea después
    var QU = 23; // Actúa como si ambos estuvieran abriendo y cerrando
    // Contexto numérico
    var IS = 24; // Evitar pausas después de cualquiera y antes de numérico
    var NU = 25; // Formar expresiones numéricas para romper líneas
    var PO = 26; // No romper después de una expresión numérica
    var PR = 27; // No se rompa delante de una expresión numérica
    var SY = 28; // Evitar un descanso antes; y permitir un descanso después
    // Otros personajes
    var AI = 29; // Actúa como AL cuando el EAW resuelto es N; de lo contrario; actuar como identificación
    var AL = 30; // Son caracteres alfabéticos o símbolos que se usan con caracteres alfabéticos
    var CJ = 31; // Tratar como NS o ID para ruptura estricta o normal.
    varEB = 32; // No dejar de seguir el modificador de emoji
    var EM = 33; // No romper con la Base Emoji anterior
    var H2 = 34; // Forma bloques de sílabas coreanas
    var H3 = 35; // Forma bloques de sílabas coreanas
    var HL = 36; // No separe el siguiente guión; de lo contrario actuar como alfabético
    var ID = 37; // Pausa antes o después; excepto en algún contexto numérico
    var JL = 38; // Forma bloques de sílabas coreanas
    var JV = 39; // Forma bloques de sílabas coreanas
    var JT = 40; // Forma bloques de sílabas coreanas
    var RI$1 = 41; // Mantenga las parejas juntas. por parejas; descanso antes y después de otras clases
    var SA = 42; // Proporcionar una oportunidad de salto de línea supeditada a un análisis de contexto adicional específico del idioma
    var XX = 43; // Tiene un comportamiento de ruptura de línea aún desconocido o posiciones de código no asignadas
    var ea_OP = [0x2329, 0xff08];
    var BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED$1 = '×';
    var BREAK_ALLOWED$1 = '÷';
    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
    var ALFABETICOS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
    var ESPACIO$1 = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINEA_BREAKS = HARD_LINE_BREAKS.concat(ESPACIO$1);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var GUIÓN = [HY, BA];
    var codePointsToCharacterClasses = function (codePoints, lineBreak) {
        if (lineBreak === void 0) { lineBreak = 'estricto'; }
        var tipos = [];
        índices var = [];
        var categorías = [];
        codePoints.forEach(función (codePoint, índice) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categorías.push(verdadero);
                classType -= LETTER_NUMBER_MODIFIER;
            }
            demás {
                categorías.push(falso);
            }
            if (['normal', 'auto', 'suelto'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    índices.push(índice);
                    tipos de retorno.push(CB);
                }
            }
            if (tipo de clase === CM || tipo de clase === ZWJ$1) {
                // LB10 Trata cualquier marca de combinación restante o ZWJ como AL.
                si (índice === 0) {
                    índices.push(índice);
                    tipos de retorno.push(AL);
                }
                // LB9 No romper una secuencia de caracteres combinados; trátelo como si tuviera la clase de salto de línea de
                // el carácter base en todas las reglas siguientes. Trata a ZWJ como si fuera CM.
                var anterior = tipos[índice - 1];
                si (LINEA_BREAKS.indexOf(anterior) === -1) {
                    índices.push(índices[índice - 1]);
                    tipos de retorno.push(anterior);
                }
                índices.push(índice);
                tipos de retorno.push(AL);
            }
            índices.push(índice);
            si (tipo de clase === CJ) {
                return tipos.push(lineBreak === 'estricto' ? NS : ID);
            }
            si (tipo de clase === SA) {
                tipos de retorno.push(AL);
            }
            si (tipo de clase === IA) {
                tipos de retorno.push(AL);
            }
            // Para caracteres complementarios, un valor predeterminado útil es tratar los caracteres en el rango 10000..1FFFD como AL
            // y caracteres en los rangos 20000..2FFFD y 30000..3FFFD como ID, hasta que se pueda revisar la implementación
            // para tener en cuenta las propiedades reales de salto de línea para estos caracteres.
            if (tipoclase === XX) {
                if ((punto de código >= 0x20000 && punto de código <= 0x2fffd) || (punto de código >= 0x30000 && punto de código <= 0x3fffd)) {
                    tipos de retorno.push(ID);
                }
                demás {
                    tipos de retorno.push(AL);
                }
            }
            tipos.push(tipoClase);
        });
        retorno [índices, tipos, categorías];
    };
    var isAdjacentWithSpaceIgnored = función (a, b, índice actual, tipos de clase) {
        var actual = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(actual) !== -1 : a === actual) {
            var i = índiceActual;
            while (i <= tipos de clase.longitud) {
                yo++;
                var siguiente = tipos de clase [i];
                si (siguiente === b) {
                    devolver verdadero;
                }
                si (siguiente! == SP) {
                    romper;
                }
            }
        }
        si (actual === SP) {
            var i = índiceActual;
            mientras (yo > 0) {
                i--;
                var anterior = tipos de clase [i];
                if (Array.isArray(a) ? a.indexOf(anterior) !== -1 : a === anterior) {
                    var n = índiceActual;
                    while (n <= tipos de clase.longitud) {
                        n++;
                        var siguiente = tipos de clase [n];
                        si (siguiente === b) {
                            devolver verdadero;
                        }
                        si (siguiente! == SP) {
                            romper;
                        }
                    }
                }
                si (anterior! == SP) {
                    romper;
                }
            }
        }
        falso retorno;
    };
    var anteriorNonSpaceClassType = function (índice actual, tipos de clase) {
        var i = índiceActual;
        mientras (yo >= 0) {
            var tipo = tipos de clase [i];
            si (tipo === SP) {
                i--;
            }
            demás {
                tipo de retorno;
            }
        }
        devolver 0;
    };
    var _lineBreakAtIndex = función (puntos de código, tipos de clase, índices, índice, cortes prohibidos) {
        if (índices[índice] === 0) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        var índiceActual = índice - 1;
        if (Array.isArray(cortesprohibidos) && cortesprohibidos[ÍndiceActual] === verdadero) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var actual = classTypes[currentIndex];
        // LB4 Siempre romper después de saltos de línea fuertes.
        // LB5 Tratar CR seguido de LF, así como CR, LF y NL como saltos de línea duros.
        var antes = beforeIndex >= 0 ? tipos de clase [antes del índice]: 0;
        var next = classTypes[afterIndex];
        if (actual === CR$1 && siguiente === LF$1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        if (HARD_LINE_BREAKS.indexOf(actual) !== -1) {
            devolver BREAK_MANDATORY;
        }
        // LB6 No romper antes de los saltos de línea fuertes.
        if (HARD_LINE_BREAKS.indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB7 No romper antes de espacios o espacios de ancho cero.
        if (ESPACIO$1.indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB8 Salto antes de cualquier carácter que sigue a un espacio de ancho cero, incluso si intervienen uno o más espacios.
        if (anteriorNonSpaceClassType(currentIndex, classTypes) === ZW) {
            devolver BREAK_ALLOWED$1;
        }
        // LB8a No romper después de una unión de ancho cero.
        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // emojis zwj
        if ((actual === EB || actual === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB11 No romper antes o después de Word Joiner y caracteres relacionados.
        if (actual === WJ || siguiente === WJ) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB12 No interrumpir después de NBSP y caracteres relacionados.
        si (actual === GL) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB12a No separe antes de NBSP y caracteres relacionados, excepto después de espacios y guiones.
        if ([SP, BA, HY].indexOf(actual) === -1 && siguiente === GL) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB13 No romper antes de ']' o '!' o ';' o '/', incluso después de los espacios.
        if ([CL, CP, EX, IS, SY].indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB14 No dividir después de '[', incluso después de espacios.
        if (anteriorNonSpaceClassType(currentIndex, classTypes) === OP) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB15 No dividir dentro de '”[', incluso con espacios intermedios.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB16 No se rompa entre la puntuación de cierre y la que no empieza (lb=NS), incluso con espacios intermedios.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB17 No dividir dentro de '——', incluso con espacios intermedios.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB18 Pausa después de espacios.
        si (actual === SP) {
            devolver BREAK_ALLOWED$1;
        }
        // LB19 No romper antes o después de las comillas, como ' ” '.
        if (actual === QU || siguiente === QU) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB20 Break antes y después de CB no resuelto.
        if (siguiente === CB || actual === CB) {
            devolver BREAK_ALLOWED$1;
        }
        // LB21 No separe antes del guión-menos, otros guiones, espacios de ancho fijo, kana pequeño y otros no iniciales, o después de los acentos agudos.
        if ([BA, HY, NS].indexOf(siguiente) !== -1 || actual === BB) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB21a No romper después de hebreo + guión.
        if (antes de === HL && HYPHEN.indexOf(actual) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB21b No se interrumpa entre Solidus y letras hebreas.
        if (actual === SY && siguiente === HL) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB22 No romper antes de puntos suspensivos.
        si (siguiente === EN) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB23 No romper entre dígitos y letras.
        if ((ALPHABETICS.indexOf(siguiente) !== -1 && actual === NU) || (ALPHABETICS.indexOf(actual) !== -1 && siguiente === NU)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB23a No romper entre prefijos numéricos e ideogramas, o entre ideogramas y sufijos numéricos.
        if ((actual === PR && [ID, EB, EM].indexOf(siguiente) !== -1) ||
            ([ID, EB, EM].indexOf(actual) !== -1 && siguiente === PO)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB24 No romper entre prefijo/postfijo numérico y letras, o entre letras y prefijo/postfijo.
        if ((ALPHABETICS.indexOf(actual) !== -1 && PREFIX_POSTFIX.indexOf(siguiente) !== -1) ||
            (PREFIX_POSTFIX.indexOf(actual) !== -1 && ALPHABETICS.indexOf(siguiente) !== -1)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB25 No se rompa entre los siguientes pares de clases relevantes para los números:
        si (
        // (PR | PO) × ( OP | HY )? NU
        ([PR, PO].indexOf(actual) !== -1 &&
            (siguiente === NU || ([OP, HY].indexOf(siguiente) !== -1 && classTypes[afterIndex + 1] === NU))) ||
            // ( OP | HY ) × NU
            ([OP, HY].indexOf(actual) !== -1 && siguiente === NU) ||
            // NU × (NU | SY | ES)
            (actual === NU && [NU, SY, IS].indexOf(siguiente) !== -1)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(siguiente) !== -1) {
            var índiceprevio = índiceactual;
            while (índice anterior >= 0) {
                var tipo = classTypes[prevIndex];
                si (escriba === NU) {
                    devolver BREAK_NOT_ALLOWED$1;
                }
                más si ([SY, IS].indexOf(tipo) !== -1) {
                    índiceprev--;
                }
                demás {
                    romper;
                }
            }
        }
        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(siguiente) !== -1) {
            var prevIndex = [CL, CP].indexOf(actual) !== -1 ? antesIndex : currentIndex;
            while (índice anterior >= 0) {
                var tipo = classTypes[prevIndex];
                si (escriba === NU) {
                    devolver BREAK_NOT_ALLOWED$1;
                }
                más si ([SY, IS].indexOf(tipo) !== -1) {
                    índiceprev--;
                }
                demás {
                    romper;
                }
            }
        }
        // LB26 No rompa una sílaba coreana.
        if ((JL === actual && [JL, JV, H2, H3].indexOf(siguiente) !== -1) ||
            ([JV, H2].indexOf(actual) !== -1 && [JV, JT].indexOf(siguiente) !== -1) ||
            ([JT, H3].indexOf(actual) !== -1 && siguiente === JT)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB27 Tratar un bloque de sílabas coreano igual que ID.
        if ((KOREAN_SYLLABLE_BLOCK.indexOf(actual) !== -1 && [IN, PO].indexOf(siguiente) !== -1) ||
            (KOREAN_SYLLABLE_BLOCK.indexOf(siguiente) !== -1 && actual === PR)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB28 No romper entre letras (“at”).
        if (ALPHABETICS.indexOf(actual) !== -1 && ALPHABETICS.indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB29 No romper entre puntuación numérica y alfabética (“eg”).
        if (actual === ES && ALFABETICOS.indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB30 No separe entre letras, números o símbolos ordinarios y paréntesis de apertura o cierre.
        if ((ALFABETICOS.concat(NU).indexOf(actual) !== -1 &&
            siguiente === OP &&
            ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
            (ALFABETICOS.concat(NU).indexOf(siguiente) !== -1 && actual === CP)) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        // LB30a Separación entre dos símbolos indicadores regionales si y solo si hay un número par de símbolos regionales
        // indicadores que preceden a la posición de la ruptura.
        if (actual === RI$1 && siguiente === RI$1) {
            var i = índices[ÍndiceActual];
            recuento de var = 1;
            mientras (yo > 0) {
                i--;
                if (tiposdeclase[i] === RI$1) {
                    contar++;
                }
                demás {
                    romper;
                }
            }
            si (cuenta % 2 !== 0) {
                devolver BREAK_NOT_ALLOWED$1;
            }
        }
        // LB30b No romper entre una base de emoji y un modificador de emoji.
        if (actual === EB && siguiente === EM) {
            devolver BREAK_NOT_ALLOWED$1;
        }
        devolver BREAK_ALLOWED$1;
    };
    var cssFormattedClasses = función (puntos de código, opciones) {
        si (! opciones) {
            opciones = { LineBreak: 'normal', WordBreak: 'normal' };
        }
        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
        if (options.wordBreak === 'romper-todo' || options.wordBreak === 'romper-palabra') {
            classTypes = classTypes.map(función (tipo) { return ([NU, AL, SA].indexOf(tipo) !== -1 ? ID : tipo); });
        }
        var puntos de ruptura prohibidos = options.wordBreak === 'mantener todo'
            ? isLetterNumber.map(function (letterNumber, i) {
                return número de letra && puntos de código[i] >= 0x4e00 && puntos de código[i] <= 0x9fff;
            })
            : indefinido;
        return [índices, tipos de clase, puntos de ruptura prohibidos];
    };
    var Break = /** @class */ (función () {
        function Salto (puntos de código, salto de línea, inicio, final) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.inicio = inicio;
            este.fin = fin;
        }
        Romper.prototipo.segmento = función () {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
        };
        volver Romper;
    }());
    var LineBreaker = función (cadena, opciones) {
        var codePoints = toCodePoints$1(str);
        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], addedBreakpoints = _a[2];
        var longitud = codePoints.longitud;
        var últimofin = 0;
        var índice siguiente = 0;
        devolver {
            siguiente: función () {
                if (siguienteÍndice >= longitud) {
                    return {hecho: verdadero, valor: nulo};
                }
                var lineBreak = BREAK_NOT_ALLOWED$1;
                while (nextIndex <longitud &&
                    (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, addedBreakpoints)) ===
                        BREAK_NO_PERMITIDO$1) { }
                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === longitud) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return {valor: valor, hecho: falso};
                }
                return {hecho: verdadero, valor: nulo};
            },
        };
    };

    // https://www.w3.org/TR/css-syntax-3
    var FLAG_UNRESTRICTED = 1 << 0;
    var FLAG_ID = 1 << 1;
    var FLAG_INTEGER = 1 << 2;
    var NÚMERO_BANDERA = 1 << 3;
    var LINE_FEED = 0x000a;
    var SÓLIDO = 0x002f;
    var REVERSE_SOLIDUS = 0x005c;
    var CARACTER_TABULACION = 0x0009;
    var ESPACIO = 0x0020;
    var COTIZACIÓN_MARK = 0x0022;
    var SIGNO_IGUAL = 0x003d;
    var NUMERO_SIGN = 0x0023;
    var DÓLAR_SIGN = 0x0024;
    var PERCENTAGE_SIGN = 0x0025;
    var APOSTROFE = 0x0027;
    var LEFT_PARENTHESIS = 0x0028;
    var PARÉNTESIS_DERECHO = 0x0029;
    var LÍNEA_BAJA = 0x005f;
    var GUIÓN_MENOS = 0x002d;
    var EXCLAMATION_MARK = 0x0021;
    var MENOS_DEL_SIGNO = 0x003c;
    var MAYOR_DEL_SIGNO = 0x003e;
    var COMERCIAL_AT = 0x0040;
    var LEFT_SQUARE_BRACKET = 0x005b;
    var RIGHT_SQUARE_BRACKET = 0x005d;
    var CIRCUMFLEX_ACCENT = 0x003d;
    var LEFT_CURLY_BRACKET = 0x007b;
    var PREGUNTA_MARK = 0x003f;
    var RIGHT_CURLY_BRACKET = 0x007d;
    var LÍNEA_VERTICAL = 0x007c;
    var TILDE = 0x007e;
    var CONTROL = 0x0080;
    var CARÁCTER_REEMPLAZO = 0xfffd;
    var ASTERISCO = 0x002a;
    var PLUS_SIGN = 0x002b;
    var COMA = 0x002c;
    var COLON = 0x003a;
    var PUNTO Y COMA = 0x003b;
    var FULL_STOP = 0x002e;
    var NULO = 0x0000;
    var RETROCESO = 0x0008;
    var LINEA_TABULACION = 0x000b;
    var SHIFT_OUT = 0x000e;
    var INFORMACIÓN_SEPARATOR_ONE = 0x001f;
    var ELIMINAR = 0x007f;
    var EOF = -1;
    var CERO = 0x0030;
    var a = 0x0061;
    var e = 0x0065;
    var f = 0x0066;
    var u = 0x0075;
    var z = 0x007a;
    var A = 0x0041;
    var E = 0x0045;
    var F = 0x0046;
    var U = 0x0055;
    var Z = 0x005a;
    var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
    var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
    var isHex = función (punto de código) {
        return esDígito(puntoCodigo) || (punto de código >= A && punto de código <= F) || (puntoCode >= a && PuntoCode <= f);
    };
    var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
    var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
    var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || esLetraMayúscula(puntoCodigo); };
    var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
    var esEspacioBlanco = función (puntoCodigo) {
        código de retornoPunto === LINE_FEED || codePoint === CARACTER_TABULACIÓN || codePoint === ESPACIO;
    };
    var isNameStartCodePoint = función (codePoint) {
        return esLetra(puntoCodigo) || no es un punto de código ASCII (punto de código) || codePoint === LÍNEA_BAJO;
    };
    var isNameCodePoint = función (codePoint) {
        return isNameStartCodePoint(codePoint) || esDígito(puntoCodigo) || codePoint === GUIÓN_MENOS;
    };
    var isNonPrintableCodePoint = función (codePoint) {
        return ((codePoint >= NULL && codePoint <= RETROCESO) ||
            codePoint === LINE_TABULATION ||
            (codePoint >= SHIFT_OUT && codePoint <= INFORMACION_SEPARATOR_ONE) ||
            codePoint === ELIMINAR);
    };
    var isValidEscape = función (c1, c2) {
        if (c1 !== REVERSE_SOLIDUS) {
            falso retorno;
        }
        devuelve c2 !== LINE_FEED;
    };
    var isIdentifierStart = función (c1, c2, c3) {
        if (c1 === GUIÓN_MENOS) {
            volver esNombreStartCodePoint(c2) || esEscapeVálido(c2, c3);
        }
        else if (esNombrePuntoCodigoInicio(c1)) {
            devolver verdadero;
        }
        más si (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            devolver verdadero;
        }
        falso retorno;
    };
    var esNúmeroInicio = función (c1, c2, c3) {
        if (c1 === SIGNO_MÁS || c1 === GUIÓN_MENOS) {
            si (esDígito(c2)) {
                devolver verdadero;
            }
            return c2 === FULL_STOP && isDigit(c3);
        }
        if (c1 === FULL_STOP) {
            volver esDígito(c2);
        }
        volver esDígito(c1);
    };
    var stringToNumber = función (puntos de código) {
        var c = 0;
        var signo = 1;
        if (puntos_codigo[c] === SIGNO_MAS || puntos_codigo[c] === GUION_MENOS) {
            if (puntosCodigo[c] === GUION_MENOS) {
                signo = -1;
            }
            c++;
        }
        var enteros = [];
        while (esDígito(puntosDeCódigo[c])) {
            enteros.push(codePoints[c++]);
        }
        var int = enteros.longitud ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
        if (codePoints[c] === FULL_STOP) {
            c++;
        }
        var fracción = [];
        while (esDígito(puntosDeCódigo[c])) {
            fracción.push(codePoints[c++]);
        }
        var fracd = fracción.longitud;
        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fracción), 10) : 0;
        if (puntosCodigo[c] === E || PuntosCodigo[c] === e) {
            c++;
        }
        var expsign = 1;
        if (puntos_codigo[c] === SIGNO_MAS || puntos_codigo[c] === GUION_MENOS) {
            if (puntosCodigo[c] === GUION_MENOS) {
                expsign = -1;
            }
            c++;
        }
        var exponente = [];
        while (esDígito(puntosDeCódigo[c])) {
            exponente.push(codePoints[c++]);
        }
        var exp = exponente.longitud ? parseInt(fromCodePoint$1.apply(void 0, exponente), 10) : 0;
        signo de retorno * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
    };
    var LEFT_PARENTHESIS_TOKEN = {
        tipo: 2 /* LEFT_PARENTHESIS_TOKEN */
    };
    var RIGHT_PARENTHESIS_TOKEN = {
        tipo: 3 /* RIGHT_PARENTHESIS_TOKEN */
    };
    var COMMA_TOKEN = { tipo: 4 /* COMMA_TOKEN */ };
    var SUFFIX_MATCH_TOKEN = { tipo: 13 /* SUFFIX_MATCH_TOKEN */ };
    var PREFIX_MATCH_TOKEN = { tipo: 8 /* PREFIX_MATCH_TOKEN */ };
    var COLUMN_TOKEN = { tipo: 21 /* COLUMN_TOKEN */ };
    var DASH_MATCH_TOKEN = { tipo: 9 /* DASH_MATCH_TOKEN */ };
    var INCLUDE_MATCH_TOKEN = { tipo: 10 /* INCLUDE_MATCH_TOKEN */ };
    var LEFT_CURLY_BRACKET_TOKEN = {
        tipo: 11 /* LEFT_CURLY_BRACKET_TOKEN */
    };
    var RIGHT_CURLY_BRACKET_TOKEN = {
        tipo: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
    };
    var SUBSTRING_MATCH_TOKEN = { tipo: 14 /* SUBSTRING_MATCH_TOKEN */ };
    var BAD_URL_TOKEN = { tipo: 23 /* BAD_URL_TOKEN */ };
    var BAD_STRING_TOKEN = { tipo: 1 /* BAD_STRING_TOKEN */ };
    var CDO_TOKEN = { tipo: 25 /* CDO_TOKEN */ };
    var CDC_TOKEN = { tipo: 24 /* CDC_TOKEN */ };
    var COLON_TOKEN = { tipo: 26 /* COLON_TOKEN */ };
    var SEMICOLON_TOKEN = { tipo: 27 /* SEMICOLON_TOKEN */ };
    var LEFT_SQUARE_BRACKET_TOKEN = {
        tipo: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
    };
    var RIGHT_SQUARE_BRACKET_TOKEN = {
        tipo: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
    };
    var WHITESPACE_TOKEN = { tipo: 31 /* WHITESPACE_TOKEN */ };
    var EOF_TOKEN = { tipo: 32 /* EOF_TOKEN */ };
    var tokenizador = /** @class */ (función () {
        tokenizador de función () {
            este._valor = [];
        }
        Tokenizer.prototype.write = función (fragmento) {
            this._value = this._value.concat(toCodePoints$1(trozo));
        };
        Tokenizador.prototipo.leer = función () {
            fichas var = [];
            var token = this.consumeToken();
            while (token !== EOF_TOKEN) {
                fichas.push(ficha);
                token = this.consumeToken();
            }
            fichas de retorno;
        };
        Tokenizer.prototype.consumeToken = función () {
            var codePoint = this.consumeCodePoint();
            cambiar (punto de código) {
                caso QUOTATION_MARK:
                    devuelve esto.consumeStringToken(QUOTATION_MARK);
                caso NUMBER_SIGN:
                    var c1 = this.peekCodePoint(0);
                    var c2 = this.peekCodePoint(1);
                    var c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                        var banderas = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                        var valor = this.consumeName();
                        return { tipo: 5 /* HASH_TOKEN */, valor: valor, banderas: banderas };
                    }
                    romper;
                caso DOLLAR_SIGN:
                    if (this.peekCodePoint(0) === SIGNO_IGUAL) {
                        this.consumeCodePoint();
                        devolver SUFFIX_MATCH_TOKEN;
                    }
                    romper;
                caso APOSTROFE:
                    devuelve esto.consumeStringToken(APOSTROPHE);
                caso LEFT_PARENTHESIS:
                    devolver LEFT_PARENTHESIS_TOKEN;
                caso RIGHT_PARENTHESIS:
                    devolver RIGHT_PARENTHESIS_TOKEN;
                caso ASTERISCO:
                    if (this.peekCodePoint(0) === SIGNO_IGUAL) {
                        this.consumeCodePoint();
                        devolver SUBSTRING_MATCH_TOKEN;
                    }
                    romper;
                caso PLUS_SIGN:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        devuelve esto.consumeNumericToken();
                    }
                    romper;
                caso COMA:
                    devolver COMMA_TOKEN;
                caso HYPHEN_MINUS:
                    var e1 = punto de código;
                    var e2 = this.peekCodePoint(0);
                    var e3 = this.peekCodePoint(1);
                    if (esNúmeroInicio(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        devuelve esto.consumeNumericToken();
                    }
                    if (esInicioIdentificador(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        devuelve esto.consumeIdentLikeToken();
                    }
                    if (e2 === GUIÓN_MENOS && e3 === MAYOR_DE_SIGNO) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        devolver CDC_TOKEN;
                    }
                    romper;
                caso FULL_STOP:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        devuelve esto.consumeNumericToken();
                    }
                    romper;
                caso SOLIDUS:
                    if (this.peekCodePoint(0) === ASTERISCO) {
                        this.consumeCodePoint();
                        mientras (verdadero) {
                            var c = this.consumeCodePoint();
                            if (c === ASTERISCO) {
                                c = this.consumeCodePoint();
                                si (c === SÓLIDO) {
                                    devuelve esto.consumeToken();
                                }
                            }
                            si (c === EOF) {
                                devuelve esto.consumeToken();
                            }
                        }
                    }
                    romper;
                caso COLON:
                    devolver COLON_FICHA;
                caso PUNTO Y COMA:
                    devuelve SEMICOLON_TOKEN;
                caso MENOS_THAN_SIGN:
                    if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                        this.peekCodePoint(1) === GUIÓN_MENOS &&
                        this.peekCodePoint(2) === GUIÓN_MENOS) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        devolver CDO_TOKEN;
                    }
                    romper;
                caso COMERCIAL_AT:
                    var a1 = this.peekCodePoint(0);
                    var a2 = this.peekCodePoint(1);
                    var a3 = this.peekCodePoint(2);
                    if (esInicioIdentificador(a1, a2, a3)) {
                        var valor = this.consumeName();
                        return { tipo: 7 /* AT_KEYWORD_TOKEN */, valor: valor };
                    }
                    romper;
                caso LEFT_SQUARE_BRACKET:
                    devolver LEFT_SQUARE_BRACKET_TOKEN;
                caso REVERSE_SOLIDUS:
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.reconsumeCodePoint(codePoint);
                        devuelve esto.consumeIdentLikeToken();
                    }
                    romper;
                caso RIGHT_SQUARE_BRACKET:
                    devuelve RIGHT_SQUARE_BRACKET_TOKEN;
                caso CIRCUMFLEX_ACCENT:
                    if (this.peekCodePoint(0) === SIGNO_IGUAL) {
                        this.consumeCodePoint();
                        devolver PREFIX_MATCH_TOKEN;
                    }
                    romper;
                caso LEFT_CURLY_BRACKET:
                    devolver LEFT_CURLY_BRACKET_TOKEN;
                caso RIGHT_CURLY_BRACKET:
                    devolver RIGHT_CURLY_BRACKET_TOKEN;
                caso tu:
                caso U:
                    var u1 = this.peekCodePoint(0);
                    var u2 = this.peekCodePoint(1);
                    if (u1 === SIGNO_MÁS && (esHex(u2) || u2 === SIGNO_DE_INTERGUNTA)) {
                        this.consumeCodePoint();
                        this.consumeUnicodeRangeToken();
                    }
                    this.reconsumeCodePoint(codePoint);
                    devuelve esto.consumeIdentLikeToken();
                caso VERTICAL_LINE:
                    if (this.peekCodePoint(0) === SIGNO_IGUAL) {
                        this.consumeCodePoint();
                        devolver DASH_MATCH_TOKEN;
                    }
                    if (this.peekCodePoint(0) === LÍNEA_VERTICAL) {
                        this.consumeCodePoint();
                        devolver COLUMN_TOKEN;
                    }
                    romper;
                caso TILDE:
                    if (this.peekCodePoint(0) === SIGNO_IGUAL) {
                        this.consumeCodePoint();
                        devuelve INCLUDE_MATCH_TOKEN;
                    }
                    romper;
                caso EOF:
                    devolver EOF_TOKEN;
            }
            if (esEspacioBlanco(puntoCodigo)) {
                this.consumirEspacioBlanco();
                devolver WHITESPACE_TOKEN;
            }
            if (esDígito(puntoCodigo)) {
                this.reconsumeCodePoint(codePoint);
                devuelve esto.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                devuelve esto.consumeIdentLikeToken();
            }
            return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
        };
        Tokenizer.prototype.consumeCodePoint = función () {
            valor var = this._value.shift();
            devuelve el tipo de valor === 'indefinido'? -1 : valor;
        };
        Tokenizer.prototype.reconsumeCodePoint = función (codePoint) {
            this._value.unshift(codePoint);
        };
        Tokenizer.prototype.peekCodePoint = función (delta) {
            if (delta >= this._value.length) {
                devolver -1;
            }
            devuelve este._valor[delta];
        };
        Tokenizer.prototype.consumeUnicodeRangeToken = función () {
            var dígitos = [];
            var codePoint = this.consumeCodePoint();
            while (isHex(codePoint) && digits.length < 6) {
                dígitos.push(puntoCodigo);
                codePoint = this.consumeCodePoint();
            }
            var marcas de interrogación = false;
            while (codePoint === QUESTION_MARK && digits.length < 6) {
                dígitos.push(puntoCodigo);
                codePoint = this.consumeCodePoint();
                signos de interrogación = verdadero;
            }
            si (signos de interrogación) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, dígitos), 16);
            if (this.peekCodePoint(0) === GUIÓN_MENOS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var dígitosfinales = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                    endDigits.push(puntoCodigo);
                    codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
            }
            demás {
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
            }
        };
        Tokenizer.prototype.consumeIdentLikeToken = función () {
            var valor = this.consumeName();
            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                devuelve esto.consumeUrlToken();
            }
            más si (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { tipo: 19 /* FUNCTION_TOKEN */, valor: valor };
            }
            return { tipo: 20 /* IDENT_TOKEN */, valor: valor };
        };
        Tokenizer.prototype.consumeUrlToken = función () {
            valor variable = [];
            this.consumirEspacioBlanco();
            if (this.peekCodePoint(0) === EOF) {
                return { tipo: 22 /* URL_TOKEN */, valor: '' };
            }
            var next = this.peekCodePoint(0);
            if (siguiente === APOSTROFE || siguiente === MARCA_COMITA) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.tipo === 0 /* STRING_TOKEN */) {
                    this.consumirEspacioBlanco();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { tipo: 22 /* URL_TOKEN */, valor: stringToken.value };
                    }
                }
                this.consumeBadUrlRemnants();
                devolver BAD_URL_TOKEN;
            }
            mientras (verdadero) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                }
                otra cosa si (isWhiteSpace(codePoint)) {
                    this.consumirEspacioBlanco();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                    }
                    this.consumeBadUrlRemnants();
                    devolver BAD_URL_TOKEN;
                }
                de lo contrario si (codePoint === QUOTATION_MARK ||
                    codePoint === APOSTROFE ||
                    codePoint === LEFT_PARENTHESIS ||
                    esNonPrintableCodePoint(codePoint)) {
                    this.consumeBadUrlRemnants();
                    devolver BAD_URL_TOKEN;
                }
                si no (codePoint === REVERSE_SOLIDUS) {
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        value.push(this.consumeEscapedCodePoint());
                    }
                    demás {
                        this.consumeBadUrlRemnants();
                        devolver BAD_URL_TOKEN;
                    }
                }
                demás {
                    valor.push(puntoCodigo);
                }
            }
        };
        Tokenizer.prototype.consumeWhiteSpace = función () {
            while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
            }
        };
        Tokenizer.prototype.consumeBadUrlRemnants = función () {
            mientras (verdadero) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                    devolver;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.consumeEscapedCodePoint();
                }
            }
        };
        Tokenizer.prototype.consumeStringSlice = función (recuento) {
            var SLICE_STACK_SIZE = 50000;
            valor var = '';
            mientras (cuenta > 0) {
                var cantidad = Math.min(SLICE_STACK_SIZE, cuenta);
                valor += fromCodePoint$1.apply(void 0, this._value.splice(0, cantidad));
                contar -= cantidad;
            }
            este._valor.shift();
            valor de retorno;
        };
        Tokenizer.prototype.consumeStringToken = función (punto de código final) {
            valor var = '';
            var i = 0;
            hacer {
                var codePoint = this._value[i];
                if (codePoint === EOF || codePoint === indefinido || codePoint === endCodePoint) {
                    valor += this.consumeStringSlice(i);
                    return { tipo: 0 /* STRING_TOKEN */, valor: valor };
                }
                if (codePoint === LINE_FEED) {
                    este._valor.empalme(0, i);
                    devolver BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                    var siguiente = this._value[i + 1];
                    if (siguiente !== EOF && siguiente !== indefinido) {
                        if (siguiente === LINE_FEED) {
                            valor += this.consumeStringSlice(i);
                            yo = -1;
                            este._valor.shift();
                        }
                        else if (isValidEscape(codePoint, next)) {
                            valor += this.consumeStringSlice(i);
                            valor += fromCodePoint$1(this.consumeEscapedCodePoint());
                            yo = -1;
                        }
                    }
                }
                yo++;
            } mientras (verdadero);
        };
        Tokenizer.prototype.consumeNumber = función () {
            var repr = [];
            var tipo = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === SIGNO_MÁS || c1 === GUIÓN_MENOS) {
                repr.push(this.consumeCodePoint());
            }
            while (esDígito(este.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                tipo = NÚMERO_BANDERA;
                while (esDígito(este.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && (((c2 === SIGNO_MÁS || c2 === GUIÓN_MENOS) && esDígito(c3)) || esDígito(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                tipo = NÚMERO_BANDERA;
                while (esDígito(este.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            return [stringToNumber(repr), tipo];
        };
        Tokenizer.prototype.consumeNumericToken = función () {
            var _a = this.consumeNumber(), número = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (esInicioIdentificador(c1, c2, c3)) {
                var unidad = this.consumeName();
                return { tipo: 15 /* DIMENSION_TOKEN */, número: número, banderas: banderas, unidad: unidad };
            }
            if (c1 === SIGNO_PERCENTAJE) {
                this.consumeCodePoint();
                return { tipo: 16 /* PERCENTAGE_TOKEN */, número: número, banderas: banderas };
            }
            return { tipo: 17 /* NUMBER_TOKEN */, número: número, banderas: banderas };
        };
        Tokenizer.prototype.consumeEscapedCodePoint = función () {
            var codePoint = this.consumeCodePoint();
            if (esHex(puntoCodigo)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                    hexadecimal += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hexadecimal, 16);
                if (punto del código hexadecimal === 0 || es el punto del código sustituto (punto del código hexadecimal) || punto del código hexadecimal > 0x10ffff) {
                    devolver REEMPLAZO_CHARACTER;
                }
                devuelve hexCodePoint;
            }
            si (punto de código === EOF) {
                devolver REEMPLAZO_CHARACTER;
            }
            punto de código de retorno;
        };
        Tokenizer.prototype.consumeName = función () {
            var resultado = '';
            mientras (verdadero) {
                var codePoint = this.consumeCodePoint();
                if (esNombreCodePoint(codePoint)) {
                    resultado += fromCodePoint$1(codePoint);
                }
                else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    resultado += fromCodePoint$1(this.consumeEscapedCodePoint());
                }
                demás {
                    this.reconsumeCodePoint(codePoint);
                    resultado devuelto;
                }
            }
        };
        volver tokenizador;
    }());

    var Parser = /** @class */ (función () {
        función analizador (tokens) {
            this._tokens = tokens;
        }
        Parser.create = función (valor) {
            var tokenizador = nuevo tokenizador();
            tokenizador.escribir(valor);
            devuelve un nuevo analizador (tokenizer.read ());
        };
        Parser.parseValue = función (valor) {
            return Parser.create(valor).parseComponentValue();
        };
        Parser.parseValues ​​= función (valor) {
            return Parser.create(valor).parseComponentValues();
        };
        Analizador.prototipo.parseComponentValue = función () {
            var token = this.consumeToken();
            while (token.type === 31 /* WHITESPACE_TOKEN */) {
                token = this.consumeToken();
            }
            if (token.type === 32 /* EOF_TOKEN */) {
                throw new SyntaxError("Error al analizar el valor del componente CSS, EOF inesperado");
            }
            this.reconsumeToken(token);
            valor var = this.consumeComponentValue();
            hacer {
                token = this.consumeToken();
            } while (token.type === 31 /* WHITESPACE_TOKEN */);
            if (token.type === 32 /* EOF_TOKEN */) {
                valor de retorno;
            }
            throw new SyntaxError("Error al analizar el valor del componente CSS, se encontraron múltiples valores cuando se esperaba solo uno");
        };
        Analizador.prototipo.parseComponentValues ​​= función () {
            var valores = [];
            mientras (verdadero) {
                valor var = this.consumeComponentValue();
                if (valor.tipo === 32 /* EOF_TOKEN */) {
                    valores de retorno;
                }
                valores.push(valor);
                valores.push();
            }
        };
        Parser.prototype.consumeComponentValue = función () {
            var token = this.consumeToken();
            cambiar (ficha.tipo) {
                caso 11 /* LEFT_CURLY_BRACKET_TOKEN */:
                caso 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
                caso 2 /* LEFT_PARENTHESIS_TOKEN */:
                    devuelve this.consumeSimpleBlock(token.type);
                caso 19 /* FUNCTION_TOKEN */:
                    devuelve this.consumeFunction(token);
            }
            ficha de retorno;
        };
        Parser.prototype.consumeSimpleBlock = función (tipo) {
            bloque var = { tipo: tipo, valores: [] };
            var token = this.consumeToken();
            mientras (verdadero) {
                if (ficha.tipo === 32 /* EOF_TOKEN */ || isEndingTokenFor(ficha, tipo)) {
                    bloque de retorno;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
            }
        };
        Parser.prototype.consumeFunction = función (funciónToken) {
            var cssFunción = {
                nombre: funciónToken.valor,
                valores: [],
                tipo: 18 /* FUNCION */
            };
            mientras (verdadero) {
                var token = this.consumeToken();
                if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
                    volver cssFunción;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
            }
        };
        Analizador.prototipo.consumeToken = función () {
            var token = this._tokens.shift();
            devolver typeof token === 'indefinido' ? EOF_TOKEN: token;
        };
        Parser.prototype.reconsumeToken = función (token) {
            this._tokens.unshift(token);
        };
        volver Analizador;
    }());
    var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
    var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
    var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
    var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
    var isIdentWithValue = función (token, valor) {
        return isIdentToken(token) && token.value === value;
    };
    var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
    var nonFunctionArgSeparator = función (token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
    };
    var parseFunctionArgs = función (tokens) {
        var argumentos = [];
        var argumento = [];
        tokens.forEach(función (token) {
            if (token.type === 4 /* COMMA_TOKEN */) {
                if (arg.longitud === 0) {
                    throw new Error("Error al analizar los argumentos de la función, cero tokens para el argumento");
                }
                argumentos.push(arg);
                argumento = [];
                devolver;
            }
            if (token.type !== 31 /* WHITESPACE_TOKEN */) {
                arg.push(token);
            }
        });
        if (arg.longitud) {
            argumentos.push(arg);
        }
        devolver argumentos;
    };
    var isEndingTokenFor = función (token, tipo) {
        if (tipo === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
            devolver verdadero;
        }
        if (tipo === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
            devolver verdadero;
        }
        return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
    };

    var isLength = función (token) {
        return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
    };

    var isLengthPercentage = función (token) {
        return token.type === 16 /* PERCENTAGE_TOKEN */ || esLongitud(token);
    };
    var parseLengthPercentageTuple = función (tokens) {
        devolver fichas.longitud > 1 ? [fichas[0], fichas[1]] : [fichas[0]];
    };
    var LONGITUD_ZERO = {
        tipo: 17 /* NÚMERO_FICHA */,
        número: 0,
        banderas: FLAG_INTEGER
    };
    var CINCUENTA_PERCENT = {
        tipo: 16 /* PERCENTAGE_TOKEN */,
        número: 50,
        banderas: FLAG_INTEGER
    };
    var CIEN_PERCENT = {
        tipo: 16 /* PERCENTAGE_TOKEN */,
        número: 100,
        banderas: FLAG_INTEGER
    };
    var getAbsoluteValueForTuple = función (tupla, ancho, alto) {
        var x = tupla[0], y = tupla[1];
        return [getAbsoluteValue(x, ancho), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
    };
    var getAbsoluteValue = función (token, padre) {
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            return (token.number / 100) * padre;
        }
        if (isDimensionToken(token)) {
            interruptor (token.unit) {
                caso 'rem':
                caso 'em':
                    return 16 * token.número; // TODO usa el tamaño de fuente correcto
                caso 'px':
                por defecto:
                    return ficha.número;
            }
        }
        return ficha.número;
    };

    var DEG = 'grado';
    var GRADUADO = 'graduado';
    var RAD = 'rad';
    var TURNO = 'giro';
    ángulo variable = {
        nombre: 'ángulo',
        analizar: función (_contexto, valor) {
            if (valor.tipo === 15 /* DIMENSION_TOKEN */) {
                cambiar (valor.unidad) {
                    caso GRADOS:
                        retorno (Matemáticas.PI * valor.número) / 180;
                    caso GRADUADO:
                        return (Math.PI / 200) * value.number;
                    caso RAD:
                        devolver valor.numero;
                    caso TURNO:
                        return Matemáticas.PI * 2 * valor.número;
                }
            }
            throw new Error("Tipo de ángulo no compatible");
        }
    };
    var isAngle = función (valor) {
        if (valor.tipo === 15 /* DIMENSION_TOKEN */) {
            if (valor.unidad === DEG || valor.unidad === GRAD || valor.unidad === RAD || valor.unidad === TURN) {
                devolver verdadero;
            }
        }
        falso retorno;
    };
    var parseNamedSide = función (tokens) {
        var sideOrCorner = fichas
            .filter(esIdentificador)
            .map(función (ident) { return ident.value; })
            .unirse(' ');
        cambiar (lado o esquina) {
            caso 'abajo a la derecha':
            caso 'hacia abajo a la derecha':
            caso 'arriba a la izquierda':
            caso 'arriba a la izquierda':
                devolver [LONGITUD_CERO, LONGITUD_CERO];
            caso 'to top':
            caso 'abajo':
                volver grados (0);
            caso 'abajo a la izquierda':
            case 'hacia abajo a la izquierda':
            caso 'superior derecho':
            caso 'arriba a la derecha':
                devolver [ZERO_LENGTH, HUNDRED_PERCENT];
            caso 'a la derecha':
            caso 'izquierda':
                grado de retorno (90);
            caso 'arriba a la izquierda':
            caso 'arriba a la izquierda':
            caso 'abajo a la derecha':
            caso 'abajo a la derecha':
                devolver [CIEN_PERCENT, CIEN_PERCENT];
            caso 'hasta abajo':
            caso 'superior':
                grado de retorno (180);
            caso 'arriba a la derecha':
            caso 'arriba a la derecha':
            caso 'abajo a la izquierda':
            caso 'abajo a la izquierda':
                devolver [CIEN_POR CIENTO, CERO_LONGITUD];
            caso 'a la izquierda':
            caso 'correcto':
                grado de retorno (270);
        }
        devolver 0;
    };
    var grado = función (grado) { return (Math.PI * grado) / 180; };

    var color$1 = {
        nombre: 'color',
        analizar: función (contexto, valor) {
            if (valor.tipo === 18 /* FUNCIÓN */) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[valor.nombre];
                if (tipo de función de color === 'indefinido') {
                    throw new Error("Intentando analizar una función de color no admitida \"" + value.name + "\"");
                }
                return colorFunction(contexto, valor.valores);
            }
            if (valor.tipo === 5 /* HASH_TOKEN */) {
                if (valor.valor.longitud === 3) {
                    var r = valor.valor.subcadena(0, 1);
                    var g = valor.valor.subcadena(1, 2);
                    var b = valor.valor.subcadena(2, 3);
                    paquete de retorno (parseInt (r + r, 16), parseInt (g + g, 16), parseInt (b + b, 16), 1);
                }
                if (valor.valor.longitud === 4) {
                    var r = valor.valor.subcadena(0, 1);
                    var g = valor.valor.subcadena(1, 2);
                    var b = valor.valor.subcadena(2, 3);
                    var a = valor.valor.subcadena(3, 4);
                    paquete de retorno (parseInt (r + r, 16), parseInt (g + g, 16), parseInt (b + b, 16), parseInt (a + a, 16) / 255);
                }
                if (valor.valor.longitud === 6) {
                    var r = valor.valor.subcadena(0, 2);
                    var g = valor.valor.subcadena(2, 4);
                    var b = valor.valor.subcadena(4, 6);
                    paquete de retorno (parseInt (r, 16), parseInt (g, 16), parseInt (b, 16), 1);
                }
                if (valor.valor.longitud === 8) {
                    var r = valor.valor.subcadena(0, 2);
                    var g = valor.valor.subcadena(2, 4);
                    var b = valor.valor.subcadena(4, 6);
                    var a = valor.valor.subcadena(6, 8);
                    paquete de retorno (parseInt (r, 16), parseInt (g, 16), parseInt (b, 16), parseInt (a, 16) / 255);
                }
            }
            if (valor.tipo === 20 /* IDENT_TOKEN */) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (typeof namedColor !== 'indefinido') {
                    volver nombradoColor;
                }
            }
            volver COLORES.TRANSPARENTE;
        }
    };
    var isTransparent = function (color) { return (0xff & color) === 0; };
    var asString = función (color) {
        var alfa = 0xff & color;
        var azul = 0xff & (color >> 8);
        var verde = 0xff & (color >> 16);
        var rojo = 0xff & (color >> 24);
        devolver alfa < 255 ? "rgba(" + rojo + "," + verde + "," + azul + "," + alfa / 255 + ")" : "rgb(" + rojo + "," + verde + "," + azul + ")";
    };
    paquete var = función (r, g, b, a) {
        return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
    };
    var getTokenColorValue = function (token, i) {
        if (ficha.tipo === 17 /* NÚMERO_PARA KEN */) {
            return ficha.número;
        }
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            var max = i === 3 ? 1: 255;
            devuelve i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
        }
        devolver 0;
    };
    var rgb = función (_contexto, argumentos) {
        var tokens = args.filter(nonFunctionArgSeparator);
        if (fichas.longitud === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            paquete de devolución (r, g, b, 1);
        }
        if (fichas.longitud === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            paquete de devolución (r, g, b, a);
        }
        devolver 0;
    };
    función matiz2rgb(t1, t2, matiz) {
        si (tono < 0) {
            matiz += 1;
        }
        si (tono >= 1) {
            matiz -= 1;
        }
        si (tono < 1 / 6) {
            retorno (t2 - t1) * matiz * 6 + t1;
        }
        si no (matiz < 1 / 2) {
            devolver t2;
        }
        si no (tono < 2/3) {
            volver (t2 - t1) * 6 * (2/3 - matiz) + t1;
        }
        demás {
            devolver t1;
        }
    }
    var hsl = función (contexto, argumentos) {
        var tokens = args.filter(nonFunctionArgSeparator);
        var hue = tokens[0], saturación = tokens[1], luminosidad = tokens[2], alfa = tokens[3];
        var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
        var s = isLengthPercentage(saturación) ? saturación.número / 100: 0;
        var l = isLengthPercentage(luminosidad) ? luminosidad.número / 100: 0;
        var a = typeof alpha !== 'indefinido' && isLengthPercentage(alpha) ? getAbsoluteValue(alfa, 1) : 1;
        si (s === 0) {
            paquete de devolución (l * 255, l * 255, l * 255, 1);
        }
        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var t1 = l * 2 - t2;
        varr = tono2rgb(t1, t2, h + 1/3);
        varg = tono2rgb(t1, t2, h);
        var b = tono2rgb(t1, t2, h - 1/3);
        paquete de devolución (r * 255, g * 255, b * 255, a);
    };
    var SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        RGB: RGB,
        rgb: rgb
    };
    var parseColor = función (contexto, valor) {
        return color$1.parse(contexto, Parser.create(valor).parseComponentValue());
    };
    var COLORES = {
        ALICEBLUE: 0xf0f8ffff,
        BLANCO ANTIGUO: 0xfaebd7ff,
        AGUA: 0x00ffffff,
        AGUAMARINA: 0x7fffd4ff,
        AZUL: 0xf0ffffff,
        BEIGE: 0xf5f5dcff,
        BISQUE: 0xffe4c4ff,
        NEGRO: 0x000000ff,
        BLANCHEDALMOND: 0xffebcdff,
        AZUL: 0x0000ffff,
        AZULVIOLETA: 0x8a2be2ff,
        MARRÓN: 0xa52a2aff,
        BURLYWOOD: 0xdeb887ff,
        CADETBLUE: 0x5f9ea0ff,
        CHARTREUSE: 0x7fff00ff,
        CHOCOLATE: 0xd2691eff,
        CORAL: 0xff7f50ff,
        AZUL AZANO: 0x6495edff,
        SEDA DE MAÍZ: 0xfff8dcff,
        CARMESÍ: 0xdc143cff,
        CIAN: 0x00ffffff,
        AZUL OSCURO: 0x00008bff,
        CIANOSCURO: 0x008b8bff,
        BARRA DE ORO OSCURO: 0xb886bbff,
        GRIS OSCURO: 0xa9a9a9ff,
        VERDE OSCURO: 0x006400ff,
        GRIS OSCURO: 0xa9a9a9ff,
        DARKHAKI: 0xbdb76bff,
        MAGENTA OSCURO: 0x8b008bff,
        VERDEOLIVA OSCURO: 0x556b2fff,
        NARANJA OSCURO: 0xff8c00ff,
        ORQUÍDEAS OSCURAS: 0x9932ccff,
        ROJO OSCURO: 0x8b0000ff,
        SALMÓN OSCURO: 0xe9967aff,
        VERDE OSCURO: 0x8fbc8fff,
        AZUL PIZARRA OSCURO: 0x483d8bff,
        GRIS PLATEADO OSCURO: 0x2f4f4fff,
        GRIS PLATEO OSCURO: 0x2f4f4fff,
        TURQUESA OSCURO: 0x00ced1ff,
        VIOLETA OSCURO: 0x9400d3ff,
        PINK PROFUNDO: 0xff1493ff,
        AZUL PROFUNDO: 0x00bfffff,
        DIMGRAY: 0x696969ff,
        DIMGREY: 0x696969ff,
        DODGERBLUE: 0x1e90ffff,
        LADRILLO FUEGO: 0xb22222ff,
        BLANCOFLORAL: 0xfffaf0ff,
        VERDE BOSQUE: 0x228b22ff,
        FUCSIA: 0xff00ffff,
        GANANCIA: 0xdcdcdcff,
        BLANCO FANTASMA: 0xf8f8ffff,
        ORO: 0xffd700ff,
        VARA DE ORO: 0xdaa520ff,
        GRIS: 0x808080ff,
        VERDE: 0x008000ff,
        AMARILLOVERDE: 0xadff2fff,
        GRIS: 0x808080ff,
        MIEL: 0xf0fff0ff,
        ROSA INTENSIVA: 0xff69b4ff,
        ROJO INDIO: 0xcd5c5cff,
        ÍNDIGO: 0x4b0082ff,
        MARFIL: 0xfffff0ff,
        CAQUI: 0xf0e68cff,
        LAVANDA: 0xe6e6faff,
        LAVANDA: 0xfff0f5ff,
        VERDE CÉSPED: 0x7cfc00ff,
        CHIFÓN DE LIMÓN: 0xfffacdff,
        AZUL CLARO: 0xadd8e6ff,
        CORAL CLARO: 0xf08080ff,
        cian claro: 0xe0ffffff,
        CLARO DORADO RODIO AMARILLO: 0xfafad2ff,
        GRIS CLARO: 0xd3d3d3ff,
        VERDE CLARO: 0x90ee90ff,
        GRIS CLARO: 0xd3d3d3ff,
        ROSA CLARO: 0xffb6c1ff,
        SALMÓN CLARO: 0xffa07aff,
        VERDE CLARO: 0x20b2aaff,
        AZUL CLARO: 0x87cefaff,
        GRIS PIZARRA DE LUCES: 0x778899ff,
        LIGHTSLATEGREY: 0x778899ff,
        AZUL ACERO CLARO: 0xb0c4deff,
        AMARILLO CLARO: 0xffffe0ff,
        LIMA: 0x00ff00ff,
        VERDE LIMA: 0x32cd32ff,
        LINO: 0xfaf0e6ff,
        MAGENTA: 0xff00ffff,
        GRANATE: 0x800000ff,
        MEDIUMAQUAMARINE: 0x66cdaaff,
        AZUL MEDIO: 0x0000cdff,
        MEDIUMORQUÍD: 0xba55d3ff,
        PÚRPURA MEDIA: 0x9370dbff,
        VERDE MEDIO: 0x3cb371ff,
        MEDIUMSLATEBLUE: 0x7b68eeff,
        VERDE PRIMAVERA MEDIANO: 0x00fa9aff,
        TURQUESA MEDIO: 0x48d1ccff,
        ROJO MEDIO: 0xc71585ff,
        AZUL MEDIANOCHE: 0x191970ff,
        CREMA DE MENTA: 0xf5fffaff,
        MISTYROSE: 0xffe4e1ff,
        MOCASÍN: 0xffe4b5ff,
        NAVAJOWHITE: 0xffdeadff,
        MARINA: 0x000080ff,
        ANTERIOR: 0xfdf5e6ff,
        OLIVA: 0x808000ff,
        OLIVEDRAB: 0x6b8e23ff,
        NARANJA: 0xffa500ff,
        ANARANJADO: 0xff4500ff,
        ORQUÍDEA: 0xda70d6ff,
        PALEGOLDENROD: 0xeee8aaff,
        VERDE PÁLIDO: 0x98fb98ff,
        PALETURQUESA: 0xafeeeeff,
        PALEVIOLETA ROJO: 0xdb7093ff,
        PAPAYAWHIP: 0xffefd5ff,
        MELOCOTÓN: 0xffdab9ff,
        PERÚ: 0xcd853fff,
        ROSA: 0xffc0cbff,
        CIRUELA: 0xdda0ddff,
        POLVO AZUL: 0xb0e0e6ff,
        PÚRPURA: 0x800080ff,
        REBECCAPURPLE: 0x663399ff,
        ROJO: 0xff0000ff,
        ROSAMARRÓN: 0xbc8f8fff,
        AZUL REAL: 0x4169e1ff,
        SILLÍN MARRÓN: 0x8b4513ff,
        SALMÓN: 0xfa8072ff,
        MARRÓN ARENA: 0xf4a460ff,
        VERDEMAR: 0x2e8b57ff,
        CONCHA: 0xfff5eeff,
        SIENA: 0xa0522dff,
        PLATA: 0xc0c0c0ff,
        AZUL CIELO: 0x87ceebff,
        AZUL PIZARRA: 0x6a5acdff,
        GRIS PIZARRA: 0x708090ff,
        GRIS PIZARRA: 0x708090ff,
        NIEVE: 0xfffafaff,
        VERDE PRIMAVERA: 0x00ff7fff,
        AZUL ACERO: 0x4682b4ff,
        TOSTADO: 0xd2b48cff,
        VERDE: 0x008080ff,
        CARDO: 0xd8bfd8ff,
        TOMATE: 0xff6347ff,
        TRANSPARENTE: 0x00000000,
        TURQUESA: 0x40e0d0ff,
        VIOLETA: 0xee82eeff,
        TRIGO: 0xf5deb3ff,
        BLANCO: 0xffffffff,
        HUMO BLANCO: 0xf5f5f5ff,
        AMARILLO: 0xffff00ff,
        VERDE AMARILLO: 0x9acd32ff
    };

    var clip de fondo = {
        nombre: 'clip de fondo',
        initialValue: 'cuadro de borde',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return tokens.map(función (token) {
                if (isIdentToken(token)) {
                    cambiar (token.valor) {
                        caso 'caja de relleno':
                            return 1 /* PADDING_BOX */;
                        caso 'caja de contenido':
                            volver 2 /* CAJA_CONTENIDO */;
                    }
                }
                volver 0 /* BORDER_BOX */;
            });
        }
    };

    var color de fondo = {
        nombre: "color de fondo",
        valorinicial: 'transparente',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'color'
    };

    var parseColorStop = función (contexto, argumentos) {
        var color = color$1.parse(contexto, argumentos[0]);
        var parada = argumentos[1];
        return stop && isLengthPercentage(stop) ? { color: color, parada: parada } : { color: color, parada: nulo };
    };
    var processColorStops = function (paradas, lineLength) {
        var primero = paradas[0];
        var last = paradas[paradas.longitud - 1];
        if (primero.parar === nulo) {
            primero.stop = ZERO_LENGTH;
        }
        if (última parada === nulo) {
            ultimo.parada = CIEN_PERCENT;
        }
        var paradas de proceso = [];
        var anterior = 0;
        for (var i = 0; i < paradas.longitud; i++) {
            var parada_1 = paradas[i].parada;
            si (parar_1 !== nulo) {
                var valorabsoluto = getAbsoluteValue(stop_1, lineLength);
                if (valorabsoluto > anterior) {
                    procesarParadas.push(valorabsoluto);
                }
                demás {
                    processStops.push(anterior);
                }
                anterior = valorabsoluto;
            }
            demás {
                paradas de proceso.push(null);
            }
        }
        var gapBegin = nulo;
        for (var i = 0; i < paradasdelproceso.longitud; i++) {
            var parada_2 = paradas de proceso[i];
            si (stop_2 === nulo) {
                if (brechaComienzo === nulo) {
                    brechaComienzo = i;
                }
            }
            de lo contrario si (brechaComienzo! == nulo) {
                var gapLength = i - gapBegin;
                var beforeGap = processStops[gapBegin - 1];
                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                para (var g = 1; g <= gapLength; g++) {
                    paradas del proceso [brechaComienzo + g - 1] = brechaValor * g;
                }
                brechaComienzo = nulo;
            }
        }
        return paradas.map(función (_a, i) {
            var color = _a.color;
            return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
        });
    };
    var getAngleFromCorner = función (esquina, ancho, alto) {
        var centroX = ancho / 2;
        var centerY = altura / 2;
        var x = getAbsoluteValue(esquina[0], ancho) - centerX;
        var y = centerY - getAbsoluteValue(esquina[1], altura);
        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    };
    var calcularDirecciónGradiente = función (ángulo, ancho, alto) {
        var radian = tipo de ángulo === 'número' ? ángulo : getAngleFromCorner(ángulo, ancho, alto);
        var lineLength = Math.abs(ancho * Math.sin(radian)) + Math.abs(alto * Math.cos(radian));
        var medio ancho = ancho / 2;
        var media altura = altura / 2;
        var halfLineLength = lineLength / 2;
        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
        return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
    };
    var distancia = function (a, b) { return Math.sqrt(a * a + b * b); };
    var findCorner = function (ancho, alto, x, y, más cercano) {
        var esquinas = [
            [0, 0],
            [0, altura],
            [ancho, 0],
            [ancho, alto]
        ];
        return corners.reduce(función (estadística, esquina) {
            var cx = esquina[0], cy = esquina[1];
            var d = distancia(x - cx, y - cy);
            if (más cercano? d < stat.optimumDistance : d > stat.optimumDistance) {
                devolver {
                    esquina óptima: esquina,
                    distanciaoptima: d
                };
            }
            estadística de retorno;
        }, {
            distancia optima: mas cercana ? Infinito: -Infinito,
            esquina óptima: nulo
        }).optimumCorner;
    };
    var calcularRadio = función (gradiente, x, y, ancho, alto) {
        var rx = 0;
        var ry = 0;
        interruptor (gradiente.tamaño) {
            caso 0 /* LADO_MAS CERCANO */:
                // El tamaño de la forma final se ajusta de modo que coincida exactamente con el lado del cuadro de degradado más cercano al centro del degradado.
                // Si la forma es una elipse, coincide exactamente con el lado más cercano en cada dimensión.
                if (gradiente.forma === 0 /* CÍRCULO */) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - ancho), Math.abs(y), Math.abs(y - altura));
                }
                else if (gradiente.forma === 1 /* ELIPSE */) {
                    rx = Math.min(Math.abs(x), Math.abs(x - ancho));
                    ry = Math.min(Math.abs(y), Math.abs(y - altura));
                }
                romper;
            caso 2 /* ESQUINA_MAS CERCANA */:
                // La forma final tiene un tamaño que pasa por la esquina del cuadro de degradado más cercana al centro del degradado.
                // Si la forma es una elipse, la forma final recibe la misma relación de aspecto que tendría si se especificara el lado más cercano.
                if (gradiente.forma === 0 /* CÍRCULO */) {
                    rx = ry = Math.min(distancia(x, y), distancia(x, y - altura), distancia(x - ancho, y), distancia(x - ancho, y - altura));
                }
                else if (gradiente.forma === 1 /* ELIPSE */) {
                    // Calcular la relación ry/rx (que será la misma que para el "lado más cercano")
                    var c = Math.min(Math.abs(y), Math.abs(y - altura)) / Math.min(Math.abs(x), Math.abs(x - ancho));
                    var _a = findCorner(ancho, alto, x, y, verdadero), cx = _a[0], cy = _a[1];
                    rx = distancia(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                romper;
            caso 1 /* LADO_MAS LEJANO */:
                // Igual que el lado más cercano, excepto que el tamaño de la forma final se basa en los lados más lejanos
                if (gradiente.forma === 0 /* CÍRCULO */) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - ancho), Math.abs(y), Math.abs(y - altura));
                }
                else if (gradiente.forma === 1 /* ELIPSE */) {
                    rx = Math.max(Math.abs(x), Math.abs(x - ancho));
                    ry = Math.max(Math.abs(y), Math.abs(y - altura));
                }
                romper;
            caso 3 /* ESQUINA_MAS LEJANA */:
                // Igual que la esquina más cercana, excepto que el tamaño de la forma final se basa en la esquina más lejana.
                // Si la forma es una elipse, la forma final recibe la misma relación de aspecto que tendría si se especificara el lado más lejano.
                if (gradiente.forma === 0 /* CÍRCULO */) {
                    rx = ry = Math.max(distancia(x, y), distancia(x, y - altura), distancia(x - ancho, y), distancia(x - ancho, y - altura));
                }
                else if (gradiente.forma === 1 /* ELIPSE */) {
                    // Calcular la relación ry/rx (que será la misma que para el "lado más lejano")
                    var c = Math.max(Math.abs(y), Math.abs(y - altura)) / Math.max(Math.abs(x), Math.abs(x - ancho));
                    var _b = findCorner(ancho, alto, x, y, falso), cx = _b[0], cy = _b[1];
                    rx = distancia(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                romper;
        }
        if (Array.isArray(gradiente.tamaño)) {
            rx = getAbsoluteValue(gradiente.tamaño[0], ancho);
            ry = degradado.tamaño.longitud === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
        }
        volver [rx, ry];
    };

    var linearGradient = función (contexto, tokens) {
        var ángulo$1 = grados(180);
        var paradas = [];
        parseFunctionArgs(tokens).forEach(función (arg, i) {
            si (yo === 0) {
                var primerToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                    ángulo$1 = analizarLadoNombrado(arg);
                    devolver;
                }
                más si (isAngle(firstToken)) {
                    ángulo$1 = ángulo.parse(contexto, primerToken);
                    devolver;
                }
            }
            var colorStop = parseColorStop(contexto, arg);
            para.push(pararcolor);
        });
        return { ángulo: ángulo$1, paradas: paradas, tipo: 1 /* LINEAR_GRADIENT */ };
    };

    var prefixLinearGradient = función (contexto, tokens) {
        var ángulo$1 = grados(180);
        var paradas = [];
        parseFunctionArgs(tokens).forEach(función (arg, i) {
            si (yo === 0) {
                var primerToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ &&
                    ['arriba', 'izquierda', 'derecha', 'abajo'].indexOf(firstToken.value) !== -1) {
                    ángulo$1 = analizarLadoNombrado(arg);
                    devolver;
                }
                más si (isAngle(firstToken)) {
                    ángulo$1 = (ángulo.parse(contexto, primerToken) + grado(270)) % grado(360);
                    devolver;
                }
            }
            var colorStop = parseColorStop(contexto, arg);
            para.push(pararcolor);
        });
        devolver {
            ángulo: ángulo$1,
            se detiene: se detiene,
            tipo: 1 /* LINEAR_GRADIENT */
        };
    };

    var webkitGradient = función (contexto, fichas) {
        ángulo var = grados (180);
        var paradas = [];
        var tipo = 1 /* LINEAR_GRADIENT */;
        var forma = 0 /* CIRCULO */;
        var tamaño = 3 /* ESQUINA MÁS LEJANA */;
        var posición = [];
        parseFunctionArgs(tokens).forEach(función (arg, i) {
            var primerToken = arg[0];
            si (yo === 0) {
                if (isIdentToken(firstToken) && firstToken.value === 'lineal') {
                    tipo = 1 /* LINEAR_GRADIENT */;
                    devolver;
                }
                else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                    tipo = 2 /* RADIAL_GRADIENT */;
                    devolver;
                }
            }
            if (firstToken.type === 18 /* FUNCIÓN */) {
                if (primerToken.nombre === 'de') {
                    var color = color$1.parse(contexto, firstToken.values[0]);
                    paradas.push({ parada: ZERO_LENGTH, color: color });
                }
                else if (firstToken.name === 'a') {
                    var color = color$1.parse(contexto, firstToken.values[0]);
                    paradas.push({ parada: CIEN_PERCENT, color: color });
                }
                else if (firstToken.name === 'color-stop') {
                    var valores = firstToken.values.filter(nonFunctionArgSeparator);
                    if (valores.longitud === 2) {
                        var color = color$1.parse(contexto, valores[1]);
                        var stop_1 = valores[0];
                        if (isNumberToken(stop_1)) {
                            para.empujar({
                                detener: { tipo: 16 /* PERCENTAGE_TOKEN */, número: stop_1.number * 100, flags: stop_1.flags },
                                color: color
                            });
                        }
                    }
                }
            }
        });
        tipo de retorno === 1 /* LINEAR_GRADIENT */
            ? {
                ángulo: (ángulo + grados (180)) % grados (360),
                se detiene: se detiene,
                tipo: tipo
            }
            : { tamaño: tamaño, forma: forma, paradas: paradas, posición: posición, tipo: tipo };
    };

    var CLOSEST_SIDE = 'lado más cercano';
    var FARTHEST_SIDE = 'lado más lejano';
    var CLOSEST_CORNER = 'esquina-mas-cercana';
    var FARTHEST_CORNER = 'esquina-más-lejana';
    var CÍRCULO = 'círculo';
    var ELIPSE = 'elipse';
    var CUBIERTA = 'cubierta';
    var CONTENER = 'contener';
    var radialGradient = función (contexto, fichas) {
        var forma = 0 /* CIRCULO */;
        var tamaño = 3 /* ESQUINA MÁS LEJANA */;
        var paradas = [];
        var posición = [];
        parseFunctionArgs(tokens).forEach(función (arg, i) {
            var isColorStop = verdadero;
            si (yo === 0) {
                var isAtPosition_1 = falso;
                isColorStop = arg.reduce(función (acc, token) {
                    si (está en la posición_1) {
                        if (isIdentToken(token)) {
                            cambiar (token.value) {
                                caso 'centro':
                                    position.push(CINCUENTA_PERCENT);
                                    retorno acc;
                                caso 'superior':
                                caso 'izquierda':
                                    posición.push(ZERO_LENGTH);
                                    retorno acc;
                                caso 'correcto':
                                caso 'abajo':
                                    posición.push(CIEN_PERCENT);
                                    retorno acc;
                            }
                        }
                        else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                        }
                    }
                    más si (isIdentToken(token)) {
                        cambiar (token.value) {
                            caso CÍRCULO:
                                forma = 0 /* CIRCULO */;
                                falso retorno;
                            caso ELIPSE:
                                forma = 1 /* ELIPSE */;
                                falso retorno;
                            caso 'en':
                                isAtPosition_1 = verdadero;
                                falso retorno;
                            caso CLOSEST_SIDE:
                                tamaño = 0 /* LADO_ESTÁNDAR */;
                                falso retorno;
                            funda protectora:
                            caso LADO MÁS LEJANO:
                                tamaño = 1 /* LADO MÁS LEJANO */;
                                falso retorno;
                            caso CONTIENE:
                            caso CLOSEST_CORNER:
                                tamaño = 2 /* ESQUINA_MAS CERCANA */;
                                falso retorno;
                            caso ESQUINA MÁS LEJANA:
                                tamaño = 3 /* ESQUINA MÁS LEJANA */;
                                falso retorno;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(tamaño)) {
                            tamaño = [];
                        }
                        tamaño.push(token);
                        falso retorno;
                    }
                    retorno acc;
                }, esParadaDeColor);
            }
            si (esColorParada) {
                var colorStop = parseColorStop(contexto, arg);
                para.push(pararcolor);
            }
        });
        return { tamaño: tamaño, forma: forma, paradas: paradas, posición: posición, tipo: 2 /* RADIAL_GRADIENT */ };
    };

    var prefixRadialGradient = función (contexto, tokens) {
        var forma = 0 /* CIRCULO */;
        var tamaño = 3 /* ESQUINA MÁS LEJANA */;
        var paradas = [];
        var posición = [];
        parseFunctionArgs(tokens).forEach(función (arg, i) {
            var isColorStop = verdadero;
            si (yo === 0) {
                isColorStop = arg.reduce(función (acc, token) {
                    if (isIdentToken(token)) {
                        cambiar (token.value) {
                            caso 'centro':
                                position.push(CINCUENTA_PERCENT);
                                falso retorno;
                            caso 'superior':
                            caso 'izquierda':
                                posición.push(ZERO_LENGTH);
                                falso retorno;
                            caso 'correcto':
                            caso 'abajo':
                                posición.push(CIEN_PERCENT);
                                falso retorno;
                        }
                    }
                    else if (isLengthPercentage(token) || isLength(token)) {
                        position.push(token);
                        falso retorno;
                    }
                    retorno acc;
                }, esParadaDeColor);
            }
            más si (i === 1) {
                isColorStop = arg.reduce(función (acc, token) {
                    if (isIdentToken(token)) {
                        cambiar (token.value) {
                            caso CÍRCULO:
                                forma = 0 /* CIRCULO */;
                                falso retorno;
                            caso ELIPSE:
                                forma = 1 /* ELIPSE */;
                                falso retorno;
                            caso CONTIENE:
                            caso CLOSEST_SIDE:
                                tamaño = 0 /* LADO_ESTÁNDAR */;
                                falso retorno;
                            caso LADO MÁS LEJANO:
                                tamaño = 1 /* LADO MÁS LEJANO */;
                                falso retorno;
                            caso CLOSEST_CORNER:
                                tamaño = 2 /* ESQUINA_MAS CERCANA */;
                                falso retorno;
                            funda protectora:
                            caso ESQUINA MÁS LEJANA:
                                tamaño = 3 /* ESQUINA MÁS LEJANA */;
                                falso retorno;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(tamaño)) {
                            tamaño = [];
                        }
                        tamaño.push(token);
                        falso retorno;
                    }
                    retorno acc;
                }, esParadaDeColor);
            }
            si (esColorParada) {
                var colorStop = parseColorStop(contexto, arg);
                para.push(pararcolor);
            }
        });
        return { tamaño: tamaño, forma: forma, paradas: paradas, posición: posición, tipo: 2 /* RADIAL_GRADIENT */ };
    };

    var isLinearGradient = función (fondo) {
        return background.type === 1 /* LINEAR_GRADIENT */;
    };
    var isRadialGradient = función (fondo) {
        return background.type === 2 /* RADIAL_GRADIENT */;
    };
    var imagen = {
        nombre: 'imagen',
        analizar: función (contexto, valor) {
            if (valor.tipo === 22 /* URL_TOKEN */) {
                var imagen_1 = { url: valor.valor, tipo: 0 /* URL */ };
                context.cache.addImage(valor.valor);
                devolver imagen_1;
            }
            if (valor.tipo === 18 /* FUNCIÓN */) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[valor.nombre];
                if (tipo de imageFunction === 'indefinido') {
                    throw new Error("Intentando analizar una función de imagen no admitida \"" + value.name + "\"");
                }
                return imageFunction(contexto, valor.valores);
            }
            throw new Error("Tipo de imagen no compatible" + valor.tipo);
        }
    };
    función esImagenApoyada(valor) {
        return (!(valor.tipo === 20 /* IDENT_TOKEN */ && valor.valor === 'ninguno') &&
            (value.type !== 18 /* FUNCIÓN */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
    }
    var SUPPORTED_IMAGE_FUNCTIONS = {
        'gradiente lineal': gradiente lineal,
        '-moz-linear-gradient': prefijoLinearGradient,
        '-ms-linear-gradient': prefijoLinearGradient,
        '-o-degradado-lineal': prefijoGradienteLineal,
        '-webkit-linear-gradient': prefijoLinearGradient,
        'gradiente radial': radialGradient,
        '-moz-radial-gradient': prefijoGradienteRadial,
        '-ms-radial-gradient': prefijoGradienteRadial,
        '-o-gradiente-radial': prefijoGradienteRadial,
        '-webkit-radial-gradient': prefijoRadialGradient,
        '-webkit-gradient': webkitGradient
    };

    var imagen de fondo = {
        nombre: 'imagen de fondo',
        valor inicial: 'ninguno',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (contexto, tokens) {
            if (fichas.longitud === 0) {
                devolver [];
            }
            var primero = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'ninguno') {
                devolver [];
            }
            fichas de retorno
                .filter(función (valor) { return nonFunctionArgSeparator(valor) && isSupportedImage(valor); })
                .map(función (valor) { return image.parse(contexto, valor); });
        }
    };

    var origen de fondo = {
        nombre: 'origen de fondo',
        initialValue: 'cuadro de borde',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return tokens.map(función (token) {
                if (isIdentToken(token)) {
                    cambiar (token.valor) {
                        caso 'caja de relleno':
                            return 1 /* PADDING_BOX */;
                        caso 'caja de contenido':
                            volver 2 /* CAJA_CONTENIDO */;
                    }
                }
                volver 0 /* BORDER_BOX */;
            });
        }
    };

    var posición de fondo = {
        nombre: 'posición de fondo',
        valorinicial: '0% 0%',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (_contexto, fichas) {
            devolver parseFunctionArgs(tokens)
                .map(función (valores) { valores de retorno.filtro(esPorcentajeDeLongitud); })
                .map(parseLengthPercentageTuple);
        }
    };

    var repetición de fondo = {
        nombre: 'repetición de fondo',
        valor inicial: 'repetir',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            devolver parseFunctionArgs(tokens)
                .map(función (valores) {
                valores devueltos
                    .filter(esIdentificador)
                    .map(función (token) { return token.value; })
                    .unirse(' ');
            })
                .map(parseBackgroundRepeat);
        }
    };
    var parseBackgroundRepeat = función (valor) {
        cambiar (valor) {
            caso 'no-repetir':
                volver 1 /* NO_REPETIR */;
            caso 'repetir-x':
            caso 'repetir no repetir':
                volver 2 /* REPETIR_X */;
            caso 'repetir-y':
            caso 'repetición sin repetición':
                volver 3 /* REPETIR_Y */;
            caso 'repetir':
            por defecto:
                volver 0 /* REPETIR */;
        }
    };

    var ANTECEDENTES_TAMAÑO;
    (función (TAMAÑO_FONDO) {
        BACKGROUND_SIZE["AUTO"] = "automático";
        BACKGROUND_SIZE["CONTENER"] = "contener";
        BACKGROUND_SIZE["COVER"] = "portada";
    })(TAMAÑO_FONDO || (TAMAÑO_FONDO = {}));
    var tamaño de fondo = {
        nombre: 'tamaño de fondo',
        valor inicial: '0',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return parseFunctionArgs(tokens).map(función (valores) { return valores.filter(isBackgroundSizeInfoToken); });
        }
    };
    var isBackgroundSizeInfoToken = función (valor) {
        devuelve isIdentToken(valor) || esPorcentajeDeLongitud(valor);
    };

    var borderColorForSide = function (lado) { return ({
        nombre: "borde-" + lado + "-color",
        valorinicial: 'transparente',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'color'
    }); };
    var borderTopColor = borderColorForSide('superior');
    var borderRightColor = borderColorForSide('right');
    var borderBottomColor = borderColorForSide('bottom');
    var borderLeftColor = borderColorForSide('izquierda');

    var borderRadiusForSide = function (lado) { return ({
        nombre: "borde-radio-" + lado,
        valor inicial: '0 0',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
        }
    }); };
    var borderTopLeftRadius = borderRadiusForSide('superior izquierda');
    var borderTopRightRadius = borderRadiusForSide('arriba a la derecha');
    var borderBottomRightRadius = borderRadiusForSide('bottom-right');
    var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

    var borderStyleForSide = function (lado) { return ({
        nombre: "borde-" + lado + "-estilo",
        valor inicial: 'sólido',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, estilo) {
            cambiar (estilo) {
                caso 'ninguno':
                    volver 0 /* NINGUNO */;
                caso 'punteado':
                    return 2 /* DISTINTO */;
                caso 'punteado':
                    return 3 /* PUNTUAL */;
                caso 'doble':
                    volver 4 /* DOBLE */;
            }
            devuelve 1 /* SÓLIDO */;
        }
    }); };
    var borderTopStyle = borderStyleForSide('superior');
    var borderRightStyle = borderStyleForSide('right');
    var borderBottomStyle = borderStyleForSide('bottom');
    var borderLeftStyle = borderStyleForSide('izquierda');

    var borderWidthForSide = function (lado) { return ({
        nombre: "borde-" + lado + "-ancho",
        valor inicial: '0',
        tipo: 0 /* VALOR */,
        prefijo: falso,
        analizar: función (_contexto, token) {
            if (isDimensionToken(token)) {
                return ficha.número;
            }
            devolver 0;
        }
    }); };
    var borderTopWidth = borderWidthForSide('superior');
    var borderRightWidth = borderWidthForSide('right');
    var borderBottomWidth = borderWidthForSide('bottom');
    var borderLeftWidth = borderWidthForSide('izquierda');

    var color = {
        nombre: "color",
        valorinicial: 'transparente',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'color'
    };

    var dirección = {
        nombre: 'dirección',
        valor inicial: 'ltr',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, dirección) {
            cambiar (dirección) {
                caso 'rtl':
                    volver 1 /* RTL */;
                caso 'ltr':
                por defecto:
                    devuelve 0 /* LTR */;
            }
        }
    };

    visualización de var = {
        nombre: 'pantalla',
        initialValue: 'bloque en línea',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return tokens.filter(isIdentToken).reduce(función (bit, token) {
                bit de retorno | parseDisplayValue(token.valor);
            }, 0 /* NINGUNO */);
        }
    };
    var parseDisplayValue = función (mostrar) {
        interruptor (pantalla) {
            caso 'bloque':
            caso '-webkit-caja':
                volver 2 /* BLOQUE */;
            caso 'en línea':
                volver 4 /* EN LÍNEA */;
            caso de 'ejecución':
                return 8 /* EJECUTAR_ENTRADA */;
            caso 'flujo':
                volver 16 /* FLUJO */;
            caso 'raíz de flujo':
                volver 32 /* RAÍZ_FLUJO */;
            caso 'tabla':
                volver 64 /* TABLA */;
            caso 'flexible':
            caso '-webkit-flex':
                volver 128 /* FLEXIBLE */;
            caso 'cuadrícula':
            caso '-ms-grid':
                volver 256 /* RED */;
            caso 'rubí':
                volver 512 /* RUBÍ */;
            caso 'subcuadrícula':
                volver 1024 /* SUBRED */;
            caso 'elemento de lista':
                volver 2048 /* LIST_ITEM */;
            case 'tabla-fila-grupo':
                devuelve 4096 /* TABLE_ROW_GROUP */;
            case 'table-header-group':
                volver 8192 /* TABLE_HEADER_GROUP */;
            case 'table-footer-group':
                volver 16384 /* TABLE_FOOTER_GROUP */;
            caso 'tabla-fila':
                devuelve 32768 /* TABLE_ROW */;
            case 'table-cell':
                devuelve 65536 /* TABLE_CELL */;
            case 'tabla-columna-grupo':
                volver 131072 /* TABLE_COLUMN_GROUP */;
            caso 'tabla-columna':
                volver 262144 /* TABLE_COLUMN */;
            caso 'título de la tabla':
                devuelve 524288 /* TABLE_CAPTION */;
            caso 'base rubí':
                devuelve 1048576 /* RUBY_BASE */;
            caso 'rubí-texto':
                volver 2097152 /* TEXTO_RUBY */;
            case 'contenedor-base-rubí':
                volver 4194304 /* RUBY_BASE_CONTAINER */;
            caso 'rubí-texto-contenedor':
                volver 8388608 /* RUBY_TEXT_CONTAINER */;
            caso 'contenido':
                volver 16777216 /* CONTENIDO */;
            case 'bloque en línea':
                volver 33554432 /* INLINE_BLOCK */;
            case 'elemento de lista en línea':
                volver 67108864 /* INLINE_LIST_ITEM */;
            caso 'tabla en línea':
                volver 134217728 /* INLINE_TABLE */;
            caso 'en línea-flex':
                volver 268435456 /* INLINE_FLEX */;
            caso 'cuadrícula en línea':
                volver 536870912 /* INLINE_GRID */;
        }
        volver 0 /* NINGUNO */;
    };

    var flotante = {
        nombre: 'flotador',
        valor inicial: 'ninguno',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, flotante) {
            interruptor (flotante) {
                caso 'izquierda':
                    volver 1 /* IZQUIERDA */;
                caso 'correcto':
                    volver 2 /* DERECHO */;
                caso 'inicio en línea':
                    volver 3 /* INLINE_START */;
                case 'inline-end':
                    volver 4 /* INLINE_END */;
            }
            volver 0 /* NINGUNO */;
        }
    };

    var espacio entre letras = {
        nombre: 'letra-espaciado',
        valor inicial: '0',
        prefijo: falso,
        tipo: 0 /* VALOR */,
        analizar: función (_contexto, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
                devolver 0;
            }
            if (ficha.tipo === 17 /* NÚMERO_FICHA */) {
                return ficha.número;
            }
            if (token.type === 15 /* DIMENSION_TOKEN */) {
                return ficha.número;
            }
            devolver 0;
        }
    };

    var LINE_BREAK;
    (función (LINE_BREAK) {
        LINE_BREAK["NORMAL"] = "normal";
        LINE_BREAK["STRICT"] = "estricto";
    })(CORTE_LINEA || (CORTE_LINEA = {}));
    var salto de línea = {
        nombre: 'salto de línea',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, salto de línea) {
            cambiar (salto de línea) {
                caso 'estricto':
                    devuelve LINE_BREAK.ESTRICTO;
                caso 'normal':
                por defecto:
                    devuelve LINE_BREAK.NORMAL;
            }
        }
    };

    var alturalinea = {
        nombre: 'altura de línea',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 4 /* TOKEN_VALUE */
    };
    var computeLineHeight = function (token, fontSize) {
        if (isIdentToken(ficha) && ficha.valor === 'normal') {
            devuelve 1.2 * tamaño de fuente;
        }
        else if (token.type === 17 /* NUMBER_TOKEN */) {
            return tamaño de fuente * token.number;
        }
        otra cosa si (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize);
        }
        volver tamaño de fuente;
    };

    var listStyleImage = {
        nombre: 'imagen-estilo-lista',
        valor inicial: 'ninguno',
        tipo: 0 /* VALOR */,
        prefijo: falso,
        analizar: función (contexto, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'ninguno') {
                devolver nulo;
            }
            volver image.parse(contexto, token);
        }
    };

    var posiciónEstiloLista = {
        nombre: 'posición-estilo-lista',
        valorinicial: 'fuera',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, posición) {
            interruptor (posición) {
                caso 'adentro':
                    volver 0 /* DENTRO */;
                caso 'afuera':
                por defecto:
                    return 1 /* FUERA */;
            }
        }
    };

    var listStyleType = {
        nombre: 'tipo-estilo-lista',
        valor inicial: 'ninguno',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, tipo) {
            cambiar (tipo) {
                caso 'disco':
                    devuelve 0 /* DISCO */;
                caso 'círculo':
                    volver 1 /* CIRCULO */;
                caso 'cuadrado':
                    return 2 /* CUADRADO */;
                caso 'decimal':
                    volver 3 /* DECIMAL */;
                caso 'cjk-decimal':
                    volver 4 /* CJK_DECIMAL */;
                caso 'decimal-primero-cero':
                    volver 5 /* DECIMAL_LEADING_ZERO */;
                caso 'low-roman':
                    volver 6 /* LOWER_ROMAN */;
                caso 'alta romana':
                    return 7 /* UPPER_ROMAN */;
                caso 'griego bajo':
                    return 8 /* GRIEGO_INFERIOR */;
                caso 'alfa inferior':
                    volver 9 /* ALFA_INFERIOR */;
                caso 'alfa superior':
                    volver 10 /* ALFA_SUPERIOR */;
                caso 'árabe-índico':
                    return 11 /* INDICADOR_ARABE */;
                caso 'armenio':
                    volver 12 /* ARMENIO */;
                caso 'bengalí':
                    volver 13 /* BENGALÍ */;
                caso 'camboyano':
                    volver 14 /* CAMBOYA */;
                case 'cjk-rama-terrestre':
                    return 15 /* CJK_RAMA_TERRESTRE */;
                case 'cjk-tallo-celeste':
                    volver 16 /* CJK_HEAVENLY_STEM */;
                caso 'cjk-ideográfico':
                    volver 17 /* CJK_IDEOGRAFICO */;
                caso 'devanagari':
                    volver 18 /* DEVANAGARI */;
                case 'ethiopic-numeric':
                    return 19 /* ETHIOPIC_NUMERIC */;
                caso 'georgiano':
                    volver 20 /* GEORGIANO */;
                caso 'gujarati':
                    volver 21 /* GUJARATI */;
                caso 'gurmukhi':
                    volver 22 /* GURMUKHI */;
                caso 'hebreo':
                    volver 22 /* HEBREO */;
                caso 'hiragana':
                    volver 23 /* HIRAGANA */;
                caso 'hiragana-iroha':
                    volver 24 /* HIRAGANA_IROHA */;
                caso 'japonés-formal':
                    return 25 /* FORMAL_JAPONÉS */;
                caso 'japonés-informal':
                    return 26 /* INFORMAL_JAPONÉS */;
                caso 'kannada':
                    volver 27 /* KANNADA */;
                caso 'katakana':
                    volver 28 // KATAKANA */;
                caso 'katakana-iroha':
                    volver 29 /* KATAKANA_IROHA */;
                caso 'khmer':
                    return 30 // KHMER */;
                caso 'coreano-hangul-formal':
                    return 31 /* KOREAN_HANGUL_FORMAL */;
                caso 'coreano-hanja-formal':
                    return 32 /* COREANO_HANJA_FORMAL */;
                caso 'coreano-hanja-informal':
                    volver 33 /* COREANO_HANJA_INFORMAL */;
                caso 'lao':
                    volver 34 /* LAO */;
                caso 'bajo-armenio':
                    return 35 /* BAJO_ARMENIO */;
                caso 'malayalam':
                    volver 36 /* MALAYALAM */;
                caso 'mongol':
                    volver 37 // MONGOLIA */;
                caso 'myanmar':
                    volver 38 /* MYANMAR */;
                caso 'oriya':
                    volver 39 /* ORIYA */;
                caso 'persa':
                    volver 40 /* PERSA */;
                case 'simp-chino-formal':
                    volver 41 /* SIMP_CHINO_FORMAL */;
                case 'simp-chino-informal':
                    return 42 /* SIMP_CHINO_INFORMAL */;
                caso 'tamil':
                    volver 43 /* TAMIL */;
                caso 'telugu':
                    volver 44 /* TELUGU */;
                caso 'tailandés':
                    volver 45 /* TAILANDÉS */;
                caso 'tibetano':
                    volver 46 /* TIBETANO */;
                caso 'trad-chino-formal':
                    return 47 /* TRAD_CHINESE_FORMAL */;
                caso 'trad-chino-informal':
                    return 48 /* TRAD_CHINESE_INFORMAL */;
                caso 'armenio superior':
                    return 49 /* ALTO_ARMENIO */;
                caso 'divulgación-abierto':
                    volver 50 /* DISCLOSURE_OPEN */;
                caso 'divulgación-cerrado':
                    return 51 /* DIVULGACIÓN_CERRADA */;
                caso 'ninguno':
                por defecto:
                    volver -1 /* NINGUNO */;
            }
        }
    };

    var marginForSide = function (lado) { return ({
        nombre: "margen-" + lado,
        valor inicial: '0',
        prefijo: falso,
        tipo: 4 /* TOKEN_VALUE */
    }); };
    var marginTop = marginForSide('superior');
    var marginRight = marginForSide('right');
    var marginBottom = marginForSide('bottom');
    var marginLeft = marginForSide('izquierda');

    var desbordamiento = {
        nombre: 'desbordamiento',
        valor inicial: 'visible',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            return tokens.filter(isIdentToken).map(función (desbordamiento) {
                cambiar (desbordamiento.valor) {
                    caso 'oculto':
                        volver 1 /* OCULTO */;
                    caso 'desplazamiento':
                        volver 2 /* DESPLAZAMIENTO */;
                    caso 'clip':
                        volver 3 /* CLIP */;
                    caso 'automático':
                        volver 4 /* AUTO */;
                    caso 'visible':
                    por defecto:
                        volver 0 /* VISIBLE */;
                }
            });
        }
    };

    var overflowWrap = {
        nombre: 'envoltura de desbordamiento',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, desbordamiento) {
            interruptor (desbordamiento) {
                case 'rompe-palabra':
                    return "palabra de ruptura" /* BREAK_WORD */;
                caso 'normal':
                por defecto:
                    volver "normal" /* NORMAL */;
            }
        }
    };

    var paddingForSide = function (lado) { return ({
        nombre: "relleno-" + lado,
        valor inicial: '0',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'porcentaje de longitud'
    }); };
    var paddingTop = paddingForSide('superior');
    var paddingRight = paddingForSide('right');
    var paddingBottom = paddingForSide('bottom');
    var paddingLeft = paddingForSide('izquierda');

    var textAlign = {
        nombre: 'alinear texto',
        valor inicial: 'izquierda',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, textAlign) {
            cambiar (alinear texto) {
                caso 'correcto':
                    volver 2 /* DERECHO */;
                caso 'centro':
                caso 'justificar':
                    volver 1 /* CENTRO */;
                caso 'izquierda':
                por defecto:
                    volver 0 /* IZQUIERDA */;
            }
        }
    };

    var posición = {
        nombre: 'posición',
        valor inicial: 'estático',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, posición) {
            interruptor (posición) {
                caso 'relativo':
                    volver 1 /* RELATIVO */;
                caso 'absoluto':
                    volver 2 /* ABSOLUTO */;
                caso 'arreglado':
                    volver 3 /* FIJO */;
                caso 'pegajoso':
                    return 4 /* PEGAJOSO */;
            }
            volver 0 /* ESTÁTICO */;
        }
    };

    var textShadow = {
        nombre: 'texto-sombra',
        valor inicial: 'ninguno',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (contexto, tokens) {
            if (fichas.longitud === 1 && isIdentWithValue(fichas[0], 'ninguna')) {
                devolver [];
            }
            return parseFunctionArgs(tokens).map(función (valores) {
                var sombra = {
                    color: COLORES.TRANSPARENTE,
                    desplazamientoX: ZERO_LENGTH,
                    desplazamientoY: ZERO_LENGTH,
                    desenfoque: ZERO_LENGTH
                };
                var c = 0;
                for (var i = 0; i < valores.longitud; i++) {
                    var token = valores[i];
                    if (esLongitud(token)) {
                        si (c === 0) {
                            sombra.offsetX = token;
                        }
                        si no (c === 1) {
                            sombra.offsetY = token;
                        }
                        demás {
                            sombra.desenfoque = token;
                        }
                        c++;
                    }
                    demás {
                        shadow.color = color$1.parse(contexto, token);
                    }
                }
                sombra de retorno;
            });
        }
    };

    var textTransform = {
        nombre: 'transformación de texto',
        valor inicial: 'ninguno',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: function (_context, textTransform) {
            cambiar (textTransform) {
                caso 'mayúsculas':
                    volver 2 /* MAYÚSCULAS */;
                caso 'minúsculas':
                    volver 1 /* MINUSCULAS */;
                caso 'mayúsculas':
                    volver 3 /* CAPITALIZAR */;
            }
            volver 0 /* NINGUNO */;
        }
    };

    var transformar$1 = {
        nombre: 'transformar',
        valor inicial: 'ninguno',
        prefijo: cierto,
        tipo: 0 /* VALOR */,
        analizar: función (_contexto, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'ninguno') {
                devolver nulo;
            }
            if (ficha.tipo === 18 /* FUNCIÓN */) {
                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (typeof transformFunction === 'indefinido') {
                    throw new Error("Intentando analizar una función de transformación no admitida \"" + token.name + "\"");
                }
                return transformFunction(token.valores);
            }
            devolver nulo;
        }
    };
    matriz var = función (argumentos) {
        var valores = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        devolver valores.longitud === 6 ? valores: nulo;
    };
    // no admite transformaciones 3D en este momento
    var matriz3d = función (argumentos) {
        var valores = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        var a1 = valores[0], b1 = valores[1]; valores[2]; valores[3]; var a2 = valores[4], b2 = valores[5]; valores[6]; valores[7]; valores[8]; valores[9]; valores[10]; valores[11]; var a4 = valores[12], b4 = valores[13]; valores[14]; valores[15];
        devolver valores.longitud === 16 ? [a1, b1, a2, b2, a4, b4]: nulo;
    };
    var SUPPORTED_TRANSFORM_FUNCTIONS = {
        matriz: matriz,
        matriz3d: matriz3d
    };

    var DEFAULT_VALUE = {
        tipo: 16 /* PERCENTAGE_TOKEN */,
        número: 50,
        banderas: FLAG_INTEGER
    };
    var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
    var transformarOrigen = {
        nombre: 'transformar-origen',
        valor inicial: '50% 50%',
        prefijo: cierto,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            var orígenes = tokens.filter(isLengthPercentage);
            if (orígenes.longitud !== 2) {
                devolver PREDETERMINADO;
            }
            return [orígenes[0], orígenes[1]];
        }
    };

    var visibilidad = {
        nombre: 'visible',
        valor inicial: 'ninguno',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, visibilidad) {
            cambiar (visibilidad) {
                caso 'oculto':
                    volver 1 /* OCULTO */;
                caso 'colapso':
                    volver 2 /* COLAPSO */;
                caso 'visible':
                por defecto:
                    volver 0 /* VISIBLE */;
            }
        }
    };

    var PALABRA_BREAK;
    (función (PALABRA_BREAK) {
        WORD_BREAK["NORMAL"] = "normal";
        WORD_BREAK["BREAK_ALL"] = "romper todo";
        WORD_BREAK["KEEP_ALL"] = "mantener todo";
    })(CORTE_PALABRA || (CORTE_PALABRA = {}));
    var corte de palabra = {
        nombre: 'salto de palabra',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: function (_context, wordBreak) {
            cambiar (salto de palabra) {
                caso 'romper todo':
                    devolver WORD_BREAK.BREAK_ALL;
                caso 'mantener todo':
                    devolver WORD_BREAK.KEEP_ALL;
                caso 'normal':
                por defecto:
                    devuelve WORD_BREAK.NORMAL;
            }
        }
    };

    var índicez = {
        nombre: 'índice z',
        valor inicial: 'automático',
        prefijo: falso,
        tipo: 0 /* VALOR */,
        analizar: función (_contexto, token) {
            if (token.type === 20 /* IDENT_TOKEN */) {
                volver { auto: verdadero, orden: 0 };
            }
            if (isNumberToken(token)) {
                return { auto: false, order: token.number };
            }
            throw new Error("Número de índice z analizado no válido");
        }
    };

    var tiempo = {
        nombre: 'tiempo',
        analizar: función (_contexto, valor) {
            if (valor.tipo === 15 /* DIMENSION_TOKEN */) {
                cambiar (valor.unidad.toLowerCase()) {
                    casos':
                        devuelve 1000 * valor.numero;
                    caso 'ms':
                        devolver valor.numero;
                }
            }
            throw new Error("Tipo de hora no soportado");
        }
    };

    var opacidad = {
        nombre: 'opacidad',
        valor inicial: '1',
        tipo: 0 /* VALOR */,
        prefijo: falso,
        analizar: función (_contexto, token) {
            if (isNumberToken(token)) {
                return ficha.número;
            }
            devolver 1;
        }
    };

    var textoDecoraciónColor = {
        nombre: "texto-decoración-color",
        valorinicial: 'transparente',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'color'
    };

    var textDecorationLine = {
        nombre: 'línea de decoración de texto',
        valor inicial: 'ninguno',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            fichas de retorno
                .filter(esIdentificador)
                .map(función (token) {
                cambiar (token.value) {
                    caso 'subrayado':
                        volver 1 /* SUBRAYADO */;
                    caso 'overline':
                        return 2 /* SOBRELÍNEA */;
                    caso 'line-through':
                        volver 3 /* LINE_THROUGH */;
                    caso 'ninguno':
                        volver 4 /* PARPADEO */;
                }
                volver 0 /* NINGUNO */;
            })
                .filter(función (línea) { línea de retorno !== 0 /* NINGUNO */; });
        }
    };

    var familia de fuentes = {
        nombre: "familia de fuentes",
        valor inicial: '',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            acumulador var = [];
            var resultados = [];
            tokens.forEach(función (token) {
                cambiar (ficha.tipo) {
                    caso 20 /* IDENT_TOKEN */:
                    caso 0 /* STRING_TOKEN */:
                        acumulador.push(token.valor);
                        romper;
                    caso 17 /* NÚMERO_FICHA */:
                        acumulador.push(token.number.toString());
                        romper;
                    caso 4 /* COMMA_TOKEN */:
                        resultados.push(acumulador.join(' '));
                        acumulador.longitud = 0;
                        romper;
                }
            });
            if (acumulador.longitud) {
                resultados.push(acumulador.join(' '));
            }
            return resultados.map(función (resultado) { return (resultado.indexOf(' ') === -1 ? resultado : "'" + resultado + "'"); });
        }
    };

    var tamaño de fuente = {
        nombre: "tamaño de fuente",
        valor inicial: '0',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'longitud'
    };

    var fontWeight = {
        nombre: 'fuente-peso',
        valor inicial: 'normal',
        tipo: 0 /* VALOR */,
        prefijo: falso,
        analizar: función (_contexto, token) {
            if (isNumberToken(token)) {
                return ficha.número;
            }
            if (isIdentToken(token)) {
                cambiar (token.value) {
                    caso 'negrita':
                        devolver 700;
                    caso 'normal':
                    por defecto:
                        devolver 400;
                }
            }
            devolver 400;
        }
    };

    var variante de fuente = {
        nombre: 'variante de fuente',
        valor inicial: 'ninguno',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (_contexto, fichas) {
            return tokens.filter(isIdentToken).map(función (token) { return token.value; });
        }
    };

    var estilo de fuente = {
        nombre: 'estilo de fuente',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 2 /* IDENT_VALUE */,
        analizar: función (_contexto, desbordamiento) {
            interruptor (desbordamiento) {
                caso 'oblicuo':
                    return "oblicuo" /* OBLICUO */;
                caso 'cursiva':
                    return "cursiva" /* CURSIVA */;
                caso 'normal':
                por defecto:
                    volver "normal" /* NORMAL */;
            }
        }
    };

    var contiene = función (bit, valor) { return (bit y valor) !== 0; };

    var contenido = {
        nombre: 'contenido',
        valor inicial: 'ninguno',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (_contexto, fichas) {
            if (fichas.longitud === 0) {
                devolver [];
            }
            var primero = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'ninguno') {
                devolver [];
            }
            fichas de retorno;
        }
    };

    var contadorIncremento = {
        nombre: 'contra-incremento',
        valor inicial: 'ninguno',
        prefijo: cierto,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            if (fichas.longitud === 0) {
                devolver nulo;
            }
            var primero = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'ninguno') {
                devolver nulo;
            }
            var incrementos = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < longitud filtrada; i++) {
                var contador = filtrado[i];
                var siguiente = filtrado[i + 1];
                if (contador.tipo === 20 /* IDENT_TOKEN */) {
                    var incremento = siguiente && isNumberToken(siguiente) ? siguiente número: 1;
                    incrementos.push({ contador: contador.valor, incremento: incremento });
                }
            }
            incrementos de retorno;
        }
    };

    var contadorReset = {
        nombre: 'contra-reinicio',
        valor inicial: 'ninguno',
        prefijo: cierto,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            if (fichas.longitud === 0) {
                devolver [];
            }
            var restablece = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < longitud filtrada; i++) {
                var contador = filtrado[i];
                var siguiente = filtrado[i + 1];
                if (isIdentToken(contador) && contador.valor !== 'ninguno') {
                    var reset = siguiente && isNumberToken(siguiente) ? siguiente número: 0;
                    resets.push({ contador: contador.valor, restablecer: restablecer });
                }
            }
            restablecer reinicios;
        }
    };

    var duración = {
        nombre: 'duración',
        valor inicial: '0s',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (contexto, tokens) {
            return tokens.filter(isDimensionToken).map(función (token) { return time.parse(contexto, token); });
        }
    };

    var cotizaciones = {
        nombre: 'citas',
        valor inicial: 'ninguno',
        prefijo: cierto,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            if (fichas.longitud === 0) {
                devolver nulo;
            }
            var primero = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'ninguno') {
                devolver nulo;
            }
            var comillas = [];
            var filtrado = tokens.filter(isStringToken);
            if (filtrado.longitud % 2 !== 0) {
                devolver nulo;
            }
            for (var i = 0; i < longitud filtrada; i += 2) {
                var open_1 = filtrado[i].valor;
                var close_1 = filtrado[i + 1].valor;
                comillas.push({ abrir: abrir_1, cerrar: cerrar_1 });
            }
            cotizaciones de retorno;
        }
    };
    var getQuote = función (comillas, profundidad, abierto) {
        si (! comillas) {
            devolver '';
        }
        var cotización = cotizaciones[Math.min(profundidad, cotizaciones.longitud - 1)];
        si (! comillas) {
            devolver '';
        }
        retorno abierto? cotización.abrir : cotización.cerrar;
    };

    var boxShadow = {
        nombre: 'caja-sombra',
        valor inicial: 'ninguno',
        tipo: 1 /* LISTA */,
        prefijo: falso,
        analizar: función (contexto, tokens) {
            if (fichas.longitud === 1 && isIdentWithValue(fichas[0], 'ninguna')) {
                devolver [];
            }
            return parseFunctionArgs(tokens).map(función (valores) {
                var sombra = {
                    color: 0x000000ff,
                    desplazamientoX: ZERO_LENGTH,
                    desplazamientoY: ZERO_LENGTH,
                    desenfoque: ZERO_LENGTH,
                    propagación: ZERO_LENGTH,
                    recuadro: falso
                };
                var c = 0;
                for (var i = 0; i < valores.longitud; i++) {
                    var token = valores[i];
                    if (isIdentWithValue(token, 'recuadro')) {
                        sombra.recuadro = verdadero;
                    }
                    más si (esLength(token)) {
                        si (c === 0) {
                            sombra.offsetX = token;
                        }
                        si no (c === 1) {
                            sombra.offsetY = token;
                        }
                        si no (c === 2) {
                            sombra.desenfoque = token;
                        }
                        demás {
                            sombra.propagación = ficha;
                        }
                        c++;
                    }
                    demás {
                        shadow.color = color$1.parse(contexto, token);
                    }
                }
                sombra de retorno;
            });
        }
    };

    var pedido de pintura = {
        nombre: 'orden de pintura',
        valor inicial: 'normal',
        prefijo: falso,
        tipo: 1 /* LISTA */,
        analizar: función (_contexto, fichas) {
            var DEFAULT_VALUE = [0 /* LLENAR */, 1 /* CARRERA */, 2 /* MARCADORES */];
            var capas = [];
            tokens.filter(isIdentToken).forEach(función (token) {
                cambiar (token.value) {
                    caso 'golpe':
                        capas.push(1 /* CARRERA */);
                        romper;
                    caso 'llenar':
                        capas.push(0 /* LLENAR */);
                        romper;
                    caso 'marcadores':
                        capas.push(2 /* MARCADORES */);
                        romper;
                }
            });
            DEFAULT_VALUE.forEach(función (valor) {
                if (capas.indexOf(valor) === -1) {
                    capas.push(valor);
                }
            });
            capas de retorno;
        }
    };

    var webkitTextStrokeColor = {
        nombre: "-webkit-texto-trazo-color",
        valorinicial: 'color actual',
        prefijo: falso,
        tipo: 3 /* TIPO_VALOR */,
        formato: 'color'
    };

    var webkitTextStrokeWidth = {
        nombre: "-webkit-text-stroke-width",
        valor inicial: '0',
        tipo: 0 /* VALOR */,
        prefijo: falso,
        analizar: función (_contexto, token) {
            if (isDimensionToken(token)) {
                return ficha.número;
            }
            devolver 0;
        }
    };

    var CSSParsedDeclaration = /** @class */ (función () {
        función CSSParsedDeclaration(contexto, declaración) {
            var _a, _b;
            this.animationDuration = analizar(contexto, duración, declaración.animationDuration);
            this.backgroundClip = analizar(contexto, backgroundClip, declaración.backgroundClip);
            this.backgroundColor = analizar (contexto, backgroundColor, declaración.backgroundColor);
            this.backgroundImage = analizar (contexto, backgroundImage, declaración.backgroundImage);
            this.backgroundOrigin = analizar(contexto, backgroundOrigin, declaración.backgroundOrigin);
            this.backgroundPosition = analizar (contexto, backgroundPosition, declaración.backgroundPosition);
            this.backgroundRepeat = analizar(contexto, backgroundRepeat, declaración.backgroundRepeat);
            this.backgroundSize = parse(contexto, backgroundSize, declare.backgroundSize);
            this.borderTopColor = analizar (contexto, borderTopColor, declaración.borderTopColor);
            this.borderRightColor = analizar (contexto, borderRightColor, declaración.borderRightColor);
            this.borderBottomColor = analizar (contexto, borderBottomColor, declaración.borderBottomColor);
            this.borderLeftColor = analizar (contexto, borderLeftColor, declaración.borderLeftColor);
            this.borderTopLeftRadius = analizar(contexto, borderTopLeftRadius, declaración.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declare.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declare.borderBottomRightRadius);
            this.borderBottomLeftRadius = analizar(contexto, borderBottomLeftRadius, declaración.borderBottomLeftRadius);
            this.borderTopStyle = analizar (contexto, borderTopStyle, declaración.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declare.borderRightStyle);
            this.borderBottomStyle = analizar(contexto, borderBottomStyle, declaración.borderBottomStyle);
            this.borderLeftStyle = analizar (contexto, borderLeftStyle, declaración.borderLeftStyle);
            this.borderTopWidth = analizar(contexto, borderTopWidth, declaración.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declare.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declare.borderBottomWidth);
            this.borderLeftWidth = analizar(contexto, borderLeftWidth, declaración.borderLeftWidth);
            this.boxShadow = analizar (contexto, boxShadow, declaración.boxShadow);
            this.color = parse(contexto, color, declaración.color);
            this.direction = parse(contexto, dirección, declaración.dirección);
            this.display = analizar(contexto, mostrar, declaración.mostrar);
            this.float = analizar(contexto, float, declaración.cssFloat);
            this.fontFamily = analizar (contexto, fontFamily, declaración.fontFamily);
            this.fontSize = analizar (contexto, fontSize, declaración.fontSize);
            this.fontStyle = analizar (contexto, fontStyle, declaración.fontStyle);
            this.fontVariant = analizar (contexto, fontVariant, declaración.fontVariant);
            this.fontWeight = analizar (contexto, fontWeight, declaración.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declare.letterSpacing);
            this.lineBreak = analizar(contexto, lineBreak, declaración.lineBreak);
            this.lineHeight = analizar (contexto, lineHeight, declaración.lineHeight);
            this.listStyleImage = analizar (contexto, listStyleImage, declaración.listStyleImage);
            this.listStylePosition = parse(contexto, listStylePosition, declare.listStylePosition);
            this.listStyleType = analizar (contexto, listStyleType, declaración.listStyleType);
            this.marginTop = analizar (contexto, marginTop, declaración.marginTop);
            this.marginRight = analizar(contexto, marginRight, declaración.marginRight);
            this.marginBottom = analizar(contexto, marginBottom, declaración.marginBottom);
            this.marginLeft = analizar (contexto, marginLeft, declaración.marginLeft);
            this.opacity = analizar (contexto, opacidad, declaración.opacity);
            var overflowTuple = parse(contexto, desbordamiento, declaración.desbordamiento);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = analizar (contexto, overflowWrap, declaración.overflowWrap);
            this.paddingTop = analizar(contexto, paddingTop, declaración.paddingTop);
            este.rellenoDerecho = parse(contexto, rellenoDerecho, declaración.rellenoDerecho);
            this.paddingBottom = analizar(contexto, paddingBottom, declaración.paddingBottom);
            this.paddingLeft = analizar(contexto, paddingLeft, declaración.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declare.paintOrder);
            this.position = parse(contexto, posición, declaración.posición);
            this.textAlign = analizar (contexto, textAlign, declaración.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declare.textDecorationColor) !== null && _a !== void 0 ? _a : declare.color);
            this.textDecorationLine = analizar(contexto, textDecorationLine, (_b = declare.textDecorationLine) !== null && _b !== void 0 ? _b : declare.textDecorationLine);
            this.textShadow = analizar (contexto, textShadow, declaración.textShadow);
            this.textTransform = analizar (contexto, textTransform, declaración.textTransform);
            this.transform = parse(context, transform$1, declare.transform);
            this.transformOrigin = parse(context, transformOrigin, declare.transformOrigin);
            this.visibility = parse(contexto, visibilidad, declaración.visibilidad);
            this.webkitTextStrokeColor = analizar (contexto, webkitTextStrokeColor, declaración.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = analizar(contexto, webkitTextStrokeWidth, declaración.webkitTextStrokeWidth);
            this.palabraBreak = parse(contexto, palabraBreak, declaración.palabraBreak);
            this.zIndex = analizar (contexto, zIndex, declaración.zIndex);
        }
        CSSParsedDeclaration.prototype.isVisible = función () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
        };
        CSSParsedDeclaration.prototype.isTransparent = función () {
            return isTransparent(this.backgroundColor);
        };
        CSSParsedDeclaration.prototype.isTransformed = función () {
            devolver esto.transformar !== null;
        };
        CSSParsedDeclaration.prototype.isPositioned = función () {
            devuelve esta posición !== 0 /* ESTÁTICA */;
        };
        CSSParsedDeclaration.prototype.isPositionedWithZIndex = función () {
            devuelve this.isPositioned() && !this.zIndex.auto;
        };
        CSSParsedDeclaration.prototype.isFloating = función () {
            return this.float !== 0 /* NINGUNO */;
        };
        CSSParsedDeclaration.prototype.isInlineLevel = función () {
            return (contiene(this.display, 4 /* EN LÍNEA */) ||
                contiene(this.display, 33554432 /* INLINE_BLOCK */) ||
                contiene(esta.pantalla, 268435456 /* INLINE_FLEX */) ||
                contiene(esta.pantalla, 536870912 /* INLINE_GRID */) ||
                contiene (esta pantalla, 67108864 /* INLINE_LIST_ITEM */) ||
                contiene (this.display, 134217728 /* INLINE_TABLE */));
        };
        devolver CSSParsedDeclaration;
    }());
    var CSSParsedPseudoDeclaration = /** @class */ (función () {
        function CSSParsedPseudoDeclaration(contexto, declaración) {
            this.content = parse(contexto, contenido, declaración.contenido);
            this.quotes = parse(contexto, comillas, declaración.quotes);
        }
        volver CSSParsedPseudoDeclaration;
    }());
    var CSSParsedCounterDeclaration = /** @class */ (función () {
        function CSSParsedCounterDeclaration(contexto, declaración) {
            this.contraIncremento = parse(contexto, contadorIncremento, declaración.contraIncremento);
            this.counterReset = analizar (contexto, counterReset, declaración.counterReset);
        }
        volver CSSParsedCounterDeclaration;
    }());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parse = función (contexto, descriptor, estilo) {
        var tokenizador = nuevo tokenizador();
        var valor = estilo !== nulo && tipo de estilo !== 'indefinido' ? estilo.toString() : descriptor.valorinicial;
        tokenizador.escribir(valor);
        var analizador = nuevo analizador (tokenizer.read ());
        cambiar (descriptor.tipo) {
            caso 2 /* IDENT_VALUE */:
                var token = analizador.parseComponentValue();
                return descriptor.parse(contexto, isIdentToken(token) ? token.value : descriptor.initialValue);
            caso 0 /* VALOR */:
                return descriptor.parse(context, parser.parseComponentValue());
            caso 1 /* LISTA */:
                return descriptor.parse(context, parser.parseComponentValues());
            caso 4 /* TOKEN_VALUE */:
                volver analizador.parseComponentValue();
            caso 3 /* TIPO_VALOR */:
                cambiar (descriptor.formato) {
                    caso 'ángulo':
                        return angle.parse(context, parser.parseComponentValue());
                    caso 'color':
                        return color$1.parse(context, parser.parseComponentValue());
                    caso 'imagen':
                        return image.parse(context, parser.parseComponentValue());
                    caso 'longitud':
                        var longitud_1 = analizador.parseComponentValue();
                        devolver esLongitud(longitud_1) ? longitud_1 : LONGITUD_CERO;
                    caso 'porcentaje de longitud':
                        var valor_1 = analizador.parseComponentValue();
                        devuelve isLengthPercentage(value_1) ? valor_1 : LONGITUD_CERO;
                    caso 'tiempo':
                        return time.parse(context, parser.parseComponentValue());
                }
                romper;
        }
    };

    var elementDebuggerAttribute = 'data-html2canvas-debug';
    var getElementDebugType = función (elemento) {
        var atributo = elemento.getAttribute(elementDebuggerAttribute);
        cambiar (atributo) {
            caso 'todos':
                volver 1 /* TODO */;
            caso 'clon':
                volver 2 /* CLONAR */;
            caso 'analizar':
                return 3 /* ANÁLISIS */;
            caso 'renderizar':
                return 4 /* RENDER */;
            por defecto:
                volver 0 /* NINGUNO */;
        }
    };
    var isDebugging = función (elemento, tipo) {
        var tipoElemento = getElementDebugType(elemento);
        return tipoElemento === 1 /* TODO */ || tipo === tipo de elemento;
    };

    var ElementContainer = /** @class */ (función () {
        function ElementoContenedor(contexto, elemento) {
            este.contexto = contexto;
            this.textNodes = [];
            este.elementos = [];
            esto.banderas = 0;
            if (esDepuración(elemento, 3 /* ANÁLISIS */)) {
                depurador;
            }
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (esHTMLElementNode(elemento)) {
                if (this.styles.animationDuration.some(function (duración) { return duración > 0; })) {
                    element.style.animationDuration = '0s';
                }
                if (this.styles.transform !== null) {
                    // getBoundingClientRect tiene en cuenta las transformaciones
                    elemento.estilo.transform = 'ninguno';
                }
            }
            this.bounds = parseBounds(this.context, element);
            if (esDepuración(elemento, 4 /* RENDER */)) {
                this.flags |= 16 /* DEBUG_RENDER */;
            }
        }
        devolver Contenedor de Elementos;
    }());

    /*
     * segmentación de texto 1.0.3 <https://github.com/niklasvh/text-segmentation>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBP AVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5A kACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQURBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgA CADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCB QgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwM jAwgAKwMyAwsFYgE3A/BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIA AgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAA gACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQG VAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZ UBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGV/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgAC AAAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAg ACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA IAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADA AMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACK BYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf/////// wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADg AOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Usa una tabla de búsqueda para encontrar el índice.
    var lookup$1 = typeof Uint8Array === 'indefinido' ? [] : nuevo Uint8Array(256);
    for (var i$1 = 0; i$1 < caracteres$1.longitud; i$1++) {
        buscar$1[chars$1.charCodeAt(i$1)] = i$1;
    }
    var decodificar = función (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, codificado1, codificado2, codificado3, codificado4;
        si (base64[base64.longitud - 1] === '=') {
            bufferLength--;
            si (base64[base64.longitud - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = tipo de ArrayBuffer !== 'indefinido' &&
            tipo de Uint8Array !== 'indefinido' &&
            typeofUint8Array.prototype.slice !== 'indefinido'
            ? nuevo ArrayBuffer(bufferLength)
            : nueva matriz (bufferLength);
        var bytes = Array.isArray(buffer) ? búfer: nuevo Uint8Array (búfer);
        para (i = 0; i < len; i += 4) {
            codificado1 = buscar$1[base64.charCodeAt(i)];
            codificado2 = buscar$1[base64.charCodeAt(i + 1)];
            codificado3 = buscar$1[base64.charCodeAt(i + 2)];
            codificado4 = buscar$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (codificado1 << 2) | (codificado2 >> 4);
            bytes[p++] = ((codificados2 y 15) << 4) | (codificado3 >> 2);
            bytes[p++] = ((codificados 3 y 3) << 6) | (codificado 4 y 63);
        }
        búfer de retorno;
    };
    var polyUint16Array = función (búfer) {
        var longitud = buffer.longitud;
        var bytes = [];
        para (var i = 0; i < longitud; i += 2) {
            bytes.push((búfer[i + 1] << 8) | búfer[i]);
        }
        devolver bytes;
    };
    var polyUint32Array = función (búfer) {
        var longitud = buffer.longitud;
        var bytes = [];
        para (var i = 0; i < longitud; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        devolver bytes;
    };

    /** Tamaño de desplazamiento para obtener el desplazamiento de la tabla de índice 2. */
    var UTRIE2_SHIFT_2 = 5;
    /** Tamaño de desplazamiento para obtener el desplazamiento de la tabla de índice 1. */
    var UTRIE2_SHIFT_1 = 6 + 5;
    /**
     * Tamaño de desplazamiento para desplazar a la izquierda los valores de la matriz de índice.
     * Aumenta el tamaño de datos posible con valores de índice de 16 bits al costo
     * de compactabilidad.
     * Esto requiere que los bloques de datos estén alineados por UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = 2;
    /**
     * Diferencia entre los dos tamaños de turno,
     * para obtener una compensación de índice 1 a partir de una compensación de índice 2. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
    /**
     * La parte de la tabla index-2 para U+D800..U+DBFF almacena valores para
     * código sustituto de plomo _unidades_ no código _puntos_.
     * Los valores para el código sustituto principal _puntos_ están indexados con esta parte de la tabla.
     * Longitud=32=0x20=0x400>>UTRIE2_SHIFT_2. (Hay 1024=0x400 sustitutos principales).
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
    /** Número de entradas en un bloque de datos. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Máscara para obtener los bits inferiores para el desplazamiento del bloque de datos. */
    var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Cuenta las longitudes de ambas piezas BMP. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * La versión UTF-8 de 2 bytes de la tabla index-2 sigue en el desplazamiento 2080=0x820.
     * Longitud 32=0x20 para bytes iniciales C0..DF, independientemente de UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 es el primer punto de código después de UTF-8 de 2 bytes */
    /**
     * La tabla de índice 1, solo se usa para puntos de código complementarios, en el desplazamiento 2112=0x840.
     * Longitud variable, para puntos de código hasta highStart, donde comienza el último rango de valor único.
     * Longitud máxima 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (Para 0x100000 puntos de código suplementarios U+10000..U+10ffff.)
     *
     * La parte de la tabla de índice 2 para puntos de código suplementarios comienza
     * después de esta tabla de índice-1.
     *
     * Tanto la tabla de índice-1 como la siguiente parte de la tabla de índice-2
     * se omiten por completo si solo hay datos BMP.
     */
    var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
    /**
     * Número de entradas de índice 1 para el BMP. 32=0x20
     * Esta parte de la tabla índice-1 se omite del formulario serializado.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
    /** Número de entradas en un bloque de índice-2. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Máscara para obtener los bits inferiores para el desplazamiento en el índice de 2 bloques. */
    var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
    var slice16 = función (ver, iniciar, finalizar) {
        if (ver.segmento) {
            return view.slice(inicio, final);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32 = función (ver, iniciar, finalizar) {
        if (ver.segmento) {
            return view.slice(inicio, final);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64 = función (base64, _byteLength) {
        var búfer = decodificar (base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array(búfer) : nuevo Uint32Array(búfer);
        var view16 = Array.isArray(buffer) ? polyUint16Array(búfer) : nuevo Uint16Array(búfer);
        longitud del encabezado var = 24;
        var index = slice16(view16, headerLength/2, view32[4]/2);
        var datos = vista32[5] === 2
            ? slice16(view16, (headerLength + view32[4]) / 2)
            : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie = /** @class */ (función () {
        función Trie (valor inicial, valor de error, inicio alto, índice de valor alto, índice, datos) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            este.índice = índice;
            esto.datos = datos;
        }
        /**
         * Obtener el valor de un punto de código almacenado en el Trie.
         *
         * @param codePoint el punto de código
         * @retorna el valor
         */
        Trie.prototype.get = función (codePoint) {
            varix;
            si (punto de código >= 0) {
                if (punto de código < 0x0d800 || (punto de código > 0x0dbff && punto de código <= 0x0ffff)) {
                    // Punto de código BMP ordinario, excluyendo sustitutos principales.
                    // BMP utiliza una búsqueda de un solo nivel. El índice BMP comienza en el desplazamiento 0 en el índice Trie2.
                    // Los datos de 16 bits se almacenan en la propia matriz de índice.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    devolver este.datos[ix];
                }
                si (punto de código <= 0xffff) {
                    // Punto de código sustituto principal. Se almacena una sección de índice separada para
                    // liderar unidades de código sustituto y puntos de código.
                    // El índice principal tiene los datos de la unidad de código.
                    // Para esta función, necesitamos los datos del punto de código.
                    // Nota: esta expresión podría refactorizarse para mejorar ligeramente la eficiencia, pero
                    // los puntos de código sustitutos serán tan raros en la práctica que no vale la pena.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    devolver este.datos[ix];
                }
                if (codePoint < this.highStart) {
                    // Punto de código complementario, use búsqueda de dos niveles.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = este.índice[ix];
                    ix += (punto de código >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                    ix = este.índice[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    devolver este.datos[ix];
                }
                si (punto de código <= 0x10ffff) {
                    devuelve this.data[this.highValueIndex];
                }
            }
            // Caer a través. El punto de código está fuera del rango legal de 0..0x10ffff.
            devolver este.errorValue;
        };
        volver Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Publicado bajo licencia MIT
     */
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Usa una tabla de búsqueda para encontrar el índice.
    var buscar = tipo de Uint8Array === 'indefinido'? [] : nuevo Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        buscar[chars.charCodeAt(i)] = i;
    }

    var Anteponer = 1;
    var CR = 2;
    var LF = 3;
    var Control = 4;
    extensión var = 5;
    var MarcaEspaciado = 7;
    var L = 8;
    var V = 9;
    var T = 10;
    var VI = 11;
    var LVT = 12;
    var ZWJ = 13;
    var Extended_Pictographic = 14;
    var RI = 15;
    var toCodePoints = function (str) {
        var puntos de código = [];
        var i = 0;
        var longitud = str.longitud;
        while (i <longitud) {
            valor var = str.charCodeAt(i++);
            if (valor >= 0xd800 && valor <= 0xdbff && i <longitud) {
                var extra = str.charCodeAt(i++);
                si ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((valor y 0x3ff) << 10) + (extra y 0x3ff) + 0x10000);
                }
                demás {
                    codePoints.push(valor);
                    i--;
                }
            }
            demás {
                codePoints.push(valor);
            }
        }
        puntos de código de retorno;
    };
    var fromCodePoint = función () {
        var puntos de código = [];
        for (var _i = 0; _i < argumentos.longitud; _i++) {
            codePoints[_i] = argumentos[_i];
        }
        if (Cadena.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var longitud = codePoints.longitud;
        si (!longitud) {
            devolver '';
        }
        var unidades de código = [];
        índice var = -1;
        var resultado = '';
        while (++índice <longitud) {
            var codePoint = codePoints[índice];
            si (punto de código <= 0xffff) {
                codeUnits.push(codePoint);
            }
            demás {
                punto de código -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (índice + 1 === longitud || unidades de código.longitud > 0x4000) {
                resultado += String.fromCharCode.apply(String, codeUnits);
                códigoUnidades.longitud = 0;
            }
        }
        resultado devuelto;
    };
    var UnicodeTrie = createTrieFromBase64(base64);
    var BREAK_NOT_ALLOWED = '×';
    var BREAK_ALLOWED = '÷';
    var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
    var _graphemeBreakAtIndex = función (_codePoints, classTypes, índice) {
        var índice anterior = índice - 2;
        var anterior = classTypes[prevIndex];
        var actual = classTypes[índice - 1];
        var siguiente = tipos de clase [índice];
        // GB3 No romper entre un CR y LF
        if (actual === CR && siguiente === LF) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB4 De lo contrario, romper antes y después de los controles.
        if (actual === CR || actual === LF || actual === Control) {
            devolver BREAK_ALLOWED;
        }
        // GB5
        if (siguiente === CR || siguiente === LF || siguiente === Control) {
            devolver BREAK_ALLOWED;
        }
        // No rompa las secuencias de sílabas Hangul.
        // GB6
        if (actual === L && [L, V, LV, LVT].indexOf(siguiente) !== -1) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB7
        if ((actual === LV || actual === V) && (siguiente === V || siguiente === T)) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB8
        if ((actual === LVT || actual === T) && siguiente === T) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB9 No romper antes de extender caracteres o ZWJ.
        if (siguiente === ZWJ || siguiente === Extender) {
            devolver BREAK_NOT_ALLOWED;
        }
        // No romper antes de SpacingMarks, o después de los caracteres Prepend.
        // GB9a
        if (siguiente === Marca de espacio) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB9a
        if (actual === Anteponer) {
            devolver BREAK_NOT_ALLOWED;
        }
        // GB11 No interrumpir dentro de secuencias modificadoras de emoji o secuencias de emoji zwj.
        if (actual === ZWJ && siguiente === Extended_Pictographic) {
            while (anterior === Extender) {
                anterior = tipos de clase[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
                devolver BREAK_NOT_ALLOWED;
            }
        }
        // GB12 No interrumpir dentro de las secuencias de banderas emoji.
        // Es decir, no se rompe entre los símbolos del indicador regional (RI)
        // si hay un número impar de caracteres RI antes del punto de ruptura.
        if (actual === RI && siguiente === RI) {
            var cuenta RI = 0;
            while (anterior === RI) {
                cuentaRI++;
                anterior = tipos de clase[--prevIndex];
            }
            if (contador % 2 === 0) {
                devolver BREAK_NOT_ALLOWED;
            }
        }
        devolver BREAK_ALLOWED;
    };
    var GraphemeBreaker = función (str) {
        var codePoints = toCodePoints(str);
        var longitud = codePoints.longitud;
        índice var = 0;
        var últimofin = 0;
        var classTypes = codePoints.map(codePointToClass);
        devolver {
            siguiente: función () {
                if (índice >= longitud) {
                    return {hecho: verdadero, valor: nulo};
                }
                var graphemeBreak = BREAK_NOT_ALLOWED;
                while (índice <longitud &&
                    (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === longitud) {
                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                    últimofin = índice;
                    return {valor: valor, hecho: falso};
                }
                return {hecho: verdadero, valor: nulo};
            },
        };
    };
    var splitGraphemes = función (str) {
        var breaker = GraphemeBreaker(str);
        var grafemas = [];
        var bk;
        while (!(bk = interruptor.siguiente()).hecho) {
            if (bk.valor) {
                graphemes.push(bk.value.slice());
            }
        }
        devolver grafemas;
    };

    var testRangeBounds = función (documento) {
        var ALTURA_PRUEBA = 123;
        si (documento.createRange) {
            var rango = documento.createRange();
            si (rango.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + "px";
                testElement.style.display = 'bloque';
                documento.cuerpo.appendChild(testElement);
                rango.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                documento.cuerpo.removeChild(testElement);
                if (rangoAltura === PRUEBA_ALTURA) {
                    devolver verdadero;
                }
            }
        }
        falso retorno;
    };
    var testIOSLineBreak = función (documento) {
        var testElement = document.createElement('boundtest');
        testElement.style.width = '50px';
        testElement.style.display = 'bloque';
        testElement.style.fontSize = '12px';
        testElement.style.letterSpacing = '0px';
        testElement.style.wordSpacing = '0px';
        documento.cuerpo.appendChild(testElement);
        var rango = documento.createRange();
        testElement.innerHTML = typeof ''.repeat === 'función' ? ''.repetir(10) : '';
        var nodo = testElement.firstChild;
        var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
        compensación de var = 0;
        var anterior = {};
        // ios 13 no maneja los cambios de línea de rango getBoundingClientRect correctamente #2177
        var support = textList.every(función (texto, i) {
            range.setStart(nodo, desplazamiento);
            rango.setEnd(nodo, desplazamiento + texto.longitud);
            var rect = rango.getBoundingClientRect();
            desplazamiento += texto.longitud;
            var límite por delante = rect.x > anterior.x || rect.y > anterior.y;
            anterior = recto;
            si (yo === 0) {
                devolver verdadero;
            }
            volver atadoAdelante;
        });
        documento.cuerpo.removeChild(testElement);
        soportes de retorno;
    };
    var testCORS = function () { return typeof new Image().crossOrigin !== 'indefinido'; };
    var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'cadena'; };
    var testSVG = función (documento) {
        var img = nueva imagen();
        var lienzo = documento.createElement('lienzo');
        var ctx = lienzo.getContext('2d');
        si (! ctx) {
            falso retorno;
        }
        img.src = "datos:imagen/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        intentar {
            ctx.drawImage(img, 0, 0);
            lienzo.toDataURL();
        }
        atrapar (e) {
            falso retorno;
        }
        devolver verdadero;
    };
    var isGreenPixel = función (datos) {
        devolver datos[0] === 0 && datos[1] === 255 && datos[2] === 0 && datos[3] === 255;
    };
    var testForeignObject = función (documento) {
        var lienzo = documento.createElement('lienzo');
        tamaño variable = 100;
        lienzo.ancho = tamaño;
        lienzo.altura = tamaño;
        var ctx = lienzo.getContext('2d');
        si (! ctx) {
            return Promesa.rechazar(falso);
        }
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, tamaño, tamaño);
        var img = nueva imagen();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = createForeignObjectSVG(tamaño, tamaño, 0, 0, img);
        ctx.fillStyle = 'rojo';
        ctx.fillRect(0, 0, tamaño, tamaño);
        volver loadSerializedSVG$1(svg)
            .entonces(función (img) {
            ctx.drawImage(img, 0, 0);
            var datos = ctx.getImageData(0, 0, tamaño, tamaño).datos;
            ctx.fillStyle = 'rojo';
            ctx.fillRect(0, 0, tamaño, tamaño);
            var nodo = documento.createElement('div');
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            nodo.estilo.altura = tamaño + "px";
            // Firefox 55 no muestra etiquetas <img /> en línea
            volver esGreenPixel(datos)
                ? loadSerializedSVG$1(createForeignObjectSVG(tamaño, tamaño, 0, 0, nodo))
                : Promise.reject (falso);
        })
            .entonces(función (img) {
            ctx.drawImage(img, 0, 0);
            // Edge no muestra imágenes de fondo
            return isGreenPixel(ctx.getImageData(0, 0, tamaño, tamaño).datos);
        })
            .catch(función () { devuelve falso; });
    };
    var createForeignObjectSVG = función (ancho, alto, x, y, nodo) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = documento.createElementNS(xmlns, 'svg');
        var objetoextranjero = documento.createElementNS(xmlns, 'objetoextranjero');
        svg.setAttributeNS(null, 'ancho', ancho.toString());
        svg.setAttributeNS(null, 'altura', altura.toString());
        objetoextranjero.setAttributeNS(nulo, 'ancho', '100%');
        objetoextranjero.setAttributeNS(null, 'altura', '100%');
        objetoextranjero.setAttributeNS(null, 'x', x.toString());
        objetoextranjero.setAttributeNS(null, 'y', y.toString());
        objetoextranjero.setAttributeNS(null, 'recursosexternosRequeridos', 'verdadero');
        svg.appendChild(objetoextranjero);
        objetoextranjero.appendChild(nodo);
        devolver svg;
    };
    var loadSerializedSVG$1 = función (svg) {
        return new Promise(función (resolver, rechazar) {
            var img = nueva imagen();
            img.onload = function () { return resolve(img); };
            img.onerror = rechazar;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var CARACTERÍSTICAS = {
        obtener SUPPORT_RANGE_BOUNDS() {
            valor var = testRangeBounds (documento);
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_RANGE_BOUNDS', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_WORD_BREAKING', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_SVG_DRAWING() {
            valor var = testSVG (documento);
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_SVG_DRAWING', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === 'función' && typeof window.fetch === 'función'
                ? testForeignObject(documento)
                : Promise.resolve(falso);
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_FOREIGNOBJECT_DRAWING', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_CORS_IMAGES() {
            valor var = testCORS();
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_CORS_IMAGES', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_RESPONSE_TYPE() {
            valor var = testResponseType();
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_RESPONSE_TYPE', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_CORS_XHR() {
            var value = 'withCredentials' en new XMLHttpRequest();
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_CORS_XHR', { valor: valor });
            valor de retorno;
        },
        obtener SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var value = !!(typeof Intl !== 'indefinido' && Intl.Segmenter);
            Object.defineProperty(CARACTERÍSTICAS, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { valor: valor });
            valor de retorno;
        }
    };

    var TextBounds = /** @class */ (función () {
        función TextBounds(texto, límites) {
            este.texto = texto;
            this.bounds = límites;
        }
        devolver límites de texto;
    }());
    var parseTextBounds = función (contexto, valor, estilos, nodo) {
        var textList = breakText(valor, estilos);
        var límites de texto = [];
        compensación de var = 0;
        textList.forEach(función (texto) {
            if (estilos.textDecorationLine.length || text.trim().length > 0) {
                si (CARACTERÍSTICAS.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(node, offset, text.length).getClientRects();
                    if (clienteRects.longitud > 1) {
                        var subSegmentos = segmentoGrafemas(texto);
                        var subOffset_1 = 0;
                        subSegmentos.forEach(función (subSegmento) {
                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                            subOffset_1 += subSegmento.longitud;
                        });
                    }
                    demás {
                        textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                    }
                }
                demás {
                    var reemplazoNodo = nodo.splitText(texto.longitud);
                    textBounds.push(nuevo TextBounds(texto, getWrapperBounds(contexto, nodo)));
                    nodo = reemplazoNodo;
                }
            }
            si no (!CARACTERÍSTICAS.SUPPORT_RANGE_BOUNDS) {
                nodo = nodo.splitText(texto.longitud);
            }
            desplazamiento += texto.longitud;
        });
        volver límites de texto;
    };
    var getWrapperBounds = función (contexto, nodo) {
        var documentopropietario = nodo.documentopropietario;
        if (documentopropietario) {
            envoltura var = documentopropietario.createElement('html2canvaswrapper');
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (nodopadre) {
                parentNode.replaceChild(contenedor, nodo);
                var límites = parseBounds(contexto, envoltorio);
                if (envoltura.primerNiño) {
                    parentNode.replaceChild(wrapper.firstChild, wrapper);
                }
                límites de retorno;
            }
        }
        volver Límites.VACÍO;
    };
    var createRange = función (nodo, desplazamiento, longitud) {
        var documentopropietario = nodo.documentopropietario;
        if (!documentopropietario) {
            throw new Error('El nodo no tiene documento de propietario');
        }
        rango var = documentopropietario.createRange();
        range.setStart(nodo, desplazamiento);
        range.setEnd(nodo, desplazamiento + longitud);
        rango de retorno;
    };
    var segmentGraphemes = función (valor) {
        si (CARACTERÍSTICAS.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(función (segmento) { return segmento.segmento; });
        }
        return dividirGrafemas(valor);
    };
    var segmentWords = función (valor, estilos) {
        si (CARACTERÍSTICAS. SOPORTE_NATIVO_TEXTO_SEGMENTACIÓN ) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularidad: 'palabra'
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(función (segmento) { return segmento.segmento; });
        }
        return romperPalabras(valor, estilos);
    };
    var breakText = función (valor, estilos) {
        volver estilos.letterSpacing !== 0 ? segmentoGrafemas(valor) : segmentoPalabras(valor, estilos);
    };
    // https://drafts.csswg.org/css-text/#separador-de-palabras
    var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
    var romperPalabras = function (str, estilos) {
        var interruptor = LineBreaker(str, {
            salto de línea: estilos.salto de línea,
            wordBreak: estilos.overflowWrap === "rompe-palabra" /* BREAK_WORD */ ? 'palabra de ruptura': estilos.wordBreak
        });
        var palabras = [];
        var bk;
        var _bucle_1 = función () {
            if (bk.valor) {
                var valor = bk.value.slice();
                var codePoints = toCodePoints$1(valor);
                var palabra_1 = '';
                codePoints.forEach(función (codePoint) {
                    if (wordSeparators.indexOf(codePoint) === -1) {
                        palabra_1 += fromCodePoint$1(codePoint);
                    }
                    demás {
                        if (palabra_1.longitud) {
                            palabras.push(palabra_1);
                        }
                        palabras.push(fromCodePoint$1(codePoint));
                        palabra_1 = '';
                    }
                });
                if (palabra_1.longitud) {
                    palabras.push(palabra_1);
                }
            }
        };
        while (!(bk = interruptor.siguiente()).hecho) {
            _bucle_1();
        }
        devolver palabras;
    };

    var TextContainer = /** @class */ (función () {
        function TextContainer(contexto, nodo, estilos) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
        }
        devuelve TextContainer;
    }());
    var transformar = función (texto, transformar) {
        cambiar (transformar) {
            caso 1 /* MINUSCULAS */:
                volver texto.toLowerCase();
            caso 3 /* CAPITALIZAR */:
                return text.replace(MAYÚSCULAS, mayúsculas);
            caso 2 /* MAYÚSCULAS */:
                volver texto.toUpperCase();
            por defecto:
                devolver texto;
        }
    };
    var MAYÚSCULAS = /(^|\s|:|-|\(|\))([az])/g;
    var mayúsculas = función (m, p1, p2) {
        if (m.longitud > 0) {
            devuelve p1 + p2.toUpperCase();
        }
        devolver m;
    };

    var ImageElementContainer = /** @class */ (función (_super) {
        __extiende(ContenedorElementoImagen, _super);
        function ImageElementContainer(contexto, img) {
            var _this = _super.call(this, context, img) || este;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            devolver _esto;
        }
        volver ImageElementContainer;
    }(Contenedor de Elementos));

    var CanvasElementContainer = /** @class */ (función (_super) {
        __extiende(CanvasElementContainer, _super);
        function CanvasElementContainer(contexto, lienzo) {
            var _this = _super.call(this, context, canvas) || este;
            _este.lienzo = lienzo;
            _this.intrinsicWidth = lienzo.ancho;
            _this.intrinsicHeight = canvas.height;
            devolver _esto;
        }
        volver CanvasElementContainer;
    }(Contenedor de Elementos));

    var SVGElementContainer = /** @class */ (función (_super) {
        __extiende(SVGElementContainer, _super);
        function SVGElementContainer(contexto, img) {
            var _this = _super.call(this, context, img) || este;
            var s = nuevo XMLSerializer();
            var límites = parseBounds(contexto, img);
            img.setAttribute('ancho', límites.ancho + "px");
            img.setAttribute('altura', límites.altura + "px");
            _this.svg = "datos:imagen/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            devolver _esto;
        }
        devuelve SVGElementContainer;
    }(Contenedor de Elementos));

    var LIElementContainer = /** @class */ (función (_super) {
        __extiende(LIElementContainer, _super);
        function LIElementContainer(contexto, elemento) {
            var _this = _super.call(this, context, element) || este;
            _este.valor = elemento.valor;
            devolver _esto;
        }
        volver LIElementContainer;
    }(Contenedor de Elementos));

    var OLElementContainer = /** @class */ (función (_super) {
        __extiende(Contenedor de Elementos OLE, _super);
        function OLEmentContainer(contexto, elemento) {
            var _this = _super.call(this, context, element) || este;
            _this.start = elemento.start;
            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
            devolver _esto;
        }
        volver OLEmentContainer;
    }(Contenedor de Elementos));

    var CHECKBOX_BORDER_RADIUS = [
        {
            tipo: 15 /* DIMENSION_TOKEN */,
            banderas: 0,
            unidad: 'px',
            numero 3
        }
    ];
    var RADIO_BORDER_RADIUS = [
        {
            tipo: 16 /* PERCENTAGE_TOKEN */,
            banderas: 0,
            número: 50
        }
    ];
    var reformatInputBounds = función (límites) {
        if (límites.ancho > límites.alto) {
            return nuevos Límites(límites.izquierda + (límites.ancho - límites.altura) / 2, límites.superior, límites.altura, límites.altura);
        }
        else if (límites.ancho <límites.altura) {
            return new Bounds(límites.izquierda, límites.superior + (límites.altura - límites.ancho) / 2, límites.ancho, límites.ancho);
        }
        límites de retorno;
    };
    var getInputValue = función (nodo) {
        var valor = nodo.tipo === CONTRASEÑA? new Array(nodo.valor.longitud + 1).join('\u2022') : nodo.valor;
        valor devuelto.longitud === 0 ? nodo.marcador de posición || '' : valor;
    };
    var CHECKBOX = 'casilla de verificación';
    var RADIO = 'radio';
    var CONTRASEÑA = 'contraseña';
    var ENTRADA_COLOR = 0x2a2a2aff;
    var InputElementContainer = /** @class */ (función (_super) {
        __extiende(InputElementContainer, _super);
        function InputElementContainer(contexto, entrada) {
            var _this = _super.call(this, context, input) || este;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(entrada);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 0xdededeff;
                _this.styles.borderTopColor =
                    _this.styles.borderRightColor =
                        _this.styles.borderBottomColor =
                            _this.styles.borderLeftColor =
                                0xa5a5a5ff;
                _this.styles.borderTopWidth =
                    _this.styles.borderRightWidth =
                        _this.styles.borderBottomWidth =
                            _this.styles.borderLeftWidth =
                                1;
                _this.styles.borderTopStyle =
                    _this.styles.borderRightStyle =
                        _this.styles.borderBottomStyle =
                            _this.styles.borderLeftStyle =
                                1 /* SÓLIDO */;
                _this.styles.backgroundClip = [0 /* BORDER_BOX */];
                _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
                _this.bounds = reformatInputBounds(_this.bounds);
            }
            cambiar (_este.tipo) {
                casilla de verificación:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    CHECKBOX_BORDER_RADIUS;
                    romper;
                caso RADIO:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    RADIO_FRONTERA_RADIO;
                    romper;
            }
            devolver _esto;
        }
        volver InputElementContainer;
    }(Contenedor de Elementos));

    var SelectElementContainer = /** @class */ (función (_super) {
        __extiende(SeleccionarElementoContenedor, _super);
        function SelectElementContainer(contexto, elemento) {
            var _this = _super.call(this, context, element) || este;
            opción var = elemento.opciones[elemento.selectedIndex || 0];
            _this.value = opción? opción.texto || '' : '';
            devolver _esto;
        }
        volver SelectElementContainer;
    }(Contenedor de Elementos));

    var TextareaElementContainer = /** @class */ (función (_super) {
        __extiende(TextareaElementContainer, _super);
        function TextareaElementContainer(contexto, elemento) {
            var _this = _super.call(this, context, element) || este;
            _este.valor = elemento.valor;
            devolver _esto;
        }
        volver TextareaElementContainer;
    }(Contenedor de Elementos));

    var IFrameElementContainer = /** @class */ (función (_super) {
        __extiende(IFrameElementContainer, _super);
        función IFrameElementContainer (contexto, iframe) {
            var _this = _super.call(this, context, iframe) || este;
            _este.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _esta.altura = parseInt(iframe.altura, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            intentar {
                si (iframe.contentWindow &&
                    iframe.contentWindow.document &&
                    iframe.contentWindow.document.documentElement) {
                    _this.tree = parseTree(contexto, iframe.contentWindow.document.documentElement);
                    // http://www.w3.org/TR/css3-background/#fondos-especiales
                    var documentBackgroundColor = iframe.contentWindow.document.documentElement
                        ? parseColor(contexto, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
                        : COLORES.TRANSPARENTE;
                    var bodyBackgroundColor = iframe.contentWindow.document.body
                        ? parseColor(contexto, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
                        : COLORES.TRANSPARENTE;
                    _this.backgroundColor = isTransparent(documentBackgroundColor)
                        ? es transparente (color de fondo del cuerpo)
                            ? _this.styles.backgroundColor
                            : color de fondo del cuerpo
                        : color de fondo del documento;
                }
            }
            atrapar (e) { }
            devolver _esto;
        }
        volver IFrameElementContainer;
    }(Contenedor de Elementos));

    var LIST_OWNERS = ['OL', 'UL', 'MENU'];
    var parseNodeTree = función (contexto, nodo, padre, raíz) {
        for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                parent.textNodes.push(nuevo TextContainer(contexto, childNode, parent.styles));
            }
            else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes) {
                    childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
                }
                demás {
                    var container = createContainer(contexto, childNode);
                    if (contenedor.estilos.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) {
                            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
                        }
                        else if (createsStackingContext(container.styles)) {
                            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
                        }
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                            container.flags |= 8 /* IS_LIST_OWNER */;
                        }
                        parent.elements.push(contenedor);
                        niñoNodo.ranura;
                        si (childNode.shadowRoot) {
                            parseNodeTree(contexto, childNode.shadowRoot, container, root);
                        }
                        más si (!isTextareaElement(childNode) &&
                            !isSVGElement(childNode) &&
                            !isSelectElement(childNode)) {
                            parseNodeTree (contexto, nodo secundario, contenedor, raíz);
                        }
                    }
                }
            }
        }
    };
    var createContainer = función (contexto, elemento) {
        si (esImagenElemento(elemento)) {
            devuelve nuevo ImageElementContainer (contexto, elemento);
        }
        si (esElementoCanvas(elemento)) {
            devolver nuevo CanvasElementContainer (contexto, elemento);
        }
        si (esSVGElement(elemento)) {
            devolver nuevo SVGElementContainer(contexto, elemento);
        }
        if (esLIElement(elemento)) {
            devolver nuevo LIElementContainer (contexto, elemento);
        }
        si (es OLE elemento (elemento)) {
            devolver nuevo OLEmentContainer (contexto, elemento);
        }
        if (esInputElement(elemento)) {
            devolver nuevo InputElementContainer (contexto, elemento);
        }
        if (esElementoSeleccionado(elemento)) {
            devuelve nuevo SelectElementContainer (contexto, elemento);
        }
        if (esTextareaElement(elemento)) {
            devuelve nuevo TextareaElementContainer (contexto, elemento);
        }
        si (esIFrameElement(elemento)) {
            devolver nuevo IFrameElementContainer (contexto, elemento);
        }
        devolver nuevo ElementContainer (contexto, elemento);
    };
    var parseTree = función (contexto, elemento) {
        var container = createContainer(contexto, elemento);
        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
        parseNodeTree(contexto, elemento, contenedor, contenedor);
        contenedor de retorno;
    };
    var createRealStackingContext = función (nodo, contenedor, raíz) {
        volver (contenedor.estilos.esPosicionadoConZIndex() ||
            container.styles.opacity < 1 ||
            contenedor.estilos.isTransformed() ||
            (isBodyElement(nodo) && root.styles.isTransparent()));
    };
    var createStackingContext = function (estilos) { return estilos.isPositioned() || estilos.esFlotante(); };
    var isTextNode = function (nodo) { return node.nodeType === Node.TEXT_NODE; };
    var isElementNode = function (nodo) { return node.nodeType === Node.ELEMENT_NODE; };
    var isHTMLElementNode = función (nodo) {
        return isElementNode(nodo) && typeof node.style !== 'indefinido' && !isSVGElementNode(nodo);
    };
    var isSVGElementNode = función (elemento) {
        return typeof element.className === 'objeto';
    };
    var isLIElement = function (nodo) { return node.tagName === 'LI'; };
    var isOLElement = function (nodo) { return node.tagName === 'OL'; };
    var isInputElement = function (nodo) { return node.tagName === 'ENTRADA'; };
    var isHTMLElement = function (nodo) { return node.tagName === 'HTML'; };
    var isSVGElement = function (nodo) { return node.tagName === 'svg'; };
    var isBodyElement = function (nodo) { return node.tagName === 'CUERPO'; };
    var isCanvasElement = function (nodo) { return node.tagName === 'CANVAS'; };
    var isVideoElement = function (nodo) { return node.tagName === 'VIDEO'; };
    var isImageElement = function (nodo) { return node.tagName === 'IMG'; };
    var isIFrameElement = function (nodo) { return node.tagName === 'IFRAME'; };
    var isStyleElement = function (nodo) { return node.tagName === 'ESTILO'; };
    var isScriptElement = function (nodo) { return node.tagName === 'SCRIPT'; };
    var isTextareaElement = function (nodo) { return node.tagName === 'TEXTAREA'; };
    var isSelectElement = function (nodo) { return node.tagName === 'SELECT'; };
    var isSlotElement = function (nodo) { return node.tagName === 'SLOT'; };
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var isCustomElement = function (nodo) { return node.tagName.indexOf('-') > 0; };

    var CounterState = /** @class */ (función () {
        función contraestado() {
            esto.contadores = {};
        }
        CounterState.prototype.getCounterValue = función (nombre) {
            var contador = this.counters[nombre];
            if (contador && contador.longitud) {
                return contador[contador.longitud - 1];
            }
            devolver 1;
        };
        CounterState.prototype.getCounterValues ​​= función (nombre) {
            var contador = this.counters[nombre];
            contador de retorno? encimera : [];
        };
        CounterState.prototype.pop = función (contadores) {
            var _esto = esto;
            contadores.forEach(función (contador) { return _this.contadores[contador].pop(); });
        };
        CounterState.prototype.parse = función (estilo) {
            var _esto = esto;
            var contadorIncremento = estilo.contraIncremento;
            var counterReset = estilo.counterReset;
            var canReset = verdadero;
            if (contraIncremento !== nulo) {
                counterIncrement.forEach(función (entrada) {
                    var contador = _this.counters[entrada.contador];
                    if (contador && entrada.incremento !== 0) {
                        canReset = falso;
                        if (!contra.longitud) {
                            contador.push(1);
                        }
                        contador[Math.max(0, contador.longitud - 1)] += entrada.incremento;
                    }
                });
            }
            var contadorNombres = [];
            si (puede restablecer) {
                counterReset.forEach(función (entrada) {
                    var contador = _this.counters[entrada.contador];
                    counterNames.push(entrada.contador);
                    si (! contador) {
                        contador = _esto.contadores[entrada.contador] = [];
                    }
                    contador.push(entrada.restablecer);
                });
            }
            devolver nombres de contadores;
        };
        volver ContraEstado;
    }());
    var ROMAN_UPPER = {
        enteros: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        valores: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV' , 'I']
    };
    var ARMENIO = {
        enteros: [
            9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        valores: [
            'n',
            'n',
            'n',
            'e',
            'n',
            'e',
            'n',
            'e',
            'n',
            'n',
            'n',
            'n',
            'e',
            'e',
            'n',
            'ñ',
            'n',
            'n',
            ',',
            'n',
            'n',
            ' ',
            ',',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ' ,
            ' ',
            ' ' ,
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ]
    };
    var HEBREO = {
        enteros: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
            19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        valores: [
            'י׳',
            'ט׳',
            'ח׳',
            'ז׳',
            'ו׳',
            'ה׳',
            'ד׳',
            'ג׳',
            'ב׳',
            'א׳',
            'ת',
            'ש',
            'ר',
            'ק',
            'צ',
            'פ',
            'ע',
            'ס',
            'נ',
            'מ',
            'ל',
            'כ',
            'יט',
            'יח',
            'יז',
            'טז',
            'טו',
            'י',
            'ט',
            'ח',
            'ז',
            'ו',
            'ה',
            'ד',
            'ג',
            'ב',
            'א'
        ]
    };
    var GEORGIANO = {
        enteros: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
            80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        valores: [
            'ჵ',
            'ჰ',
            'ჯ',
            'ჴ',
            'ხ',
            'ჭ',
            'წ',
            'ძ',
            'ც',
            'ჩ',
            'შ',
            'ყ',
            'ღ',
            'ქ',
            'ფ',
            'ჳ',
            'ტ',
            'ს',
            'რ',
            'ჟ',
            'პ',
            'ო',
            'ჲ',
            'ნ',
            'მ',
            'ლ',
            'კ',
            'ი',
            'თ',
            'ჱ',
            'ზ',
            'ვ',
            'ე',
            'დ',
            'გ',
            'ბ',
            'ა'
        ]
    };
    var createAdditiveCounter = función (valor, mínimo, máximo, símbolos, reserva, sufijo) {
        if (valor < min || valor > max) {
            return createCounterText(valor, reserva, sufijo.longitud > 0);
        }
        return (símbolos.integers.reduce(función (cadena, entero, índice) {
            while (valor >= entero) {
                valor -= entero;
                cadena += símbolos.valores[índice];
            }
            cadena de retorno;
        }, '') + sufijo);
    };
    var createCounterStyleWithSymbolResolver = función (valor, codePointRangeLength, isNumeric, resolver) {
        var cadena = '';
        hacer {
            si (! es numérico) {
                valor--;
            }
            cadena = resolver (valor) + cadena;
            valor /= codePointRangeLength;
        } while (valor * codePointRangeLength >= codePointRangeLength);
        cadena de retorno;
    };
    var createCounterStyleFromRange = función (valor, codePointRangeStart, codePointRangeEnd, isNumeric, sufijo) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
        volver ((valor < 0 ? '-' : '') +
            (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
                return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
            }) +
                sufijo));
    };
    var createCounterStyleFromSymbols = función (valor, símbolos, sufijo) {
        if (sufijo === void 0) { sufijo = '. '; }
        var codePointRangeLength = símbolos.longitud;
        return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + sufijo);
    };
    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFICIENTS = 1 << 2;
    var CJK_CIENTOS_COEFICIENTES = 1 << 3;
    var createCJKCounter = función (valor, números, multiplicadores, signo negativo, sufijo, banderas) {
        si (valor < -9999 || valor > 9999) {
            return createCounterText(valor, 4 /* CJK_DECIMAL */, sufijo.longitud > 0);
        }
        var tmp = Math.abs(valor);
        var cadena = sufijo;
        si (tmp === 0) {
            devolver números[0] + cadena;
        }
        for (var dígito = 0; tmp > 0 && dígito <= 4; dígito++) {
            coeficiente var = tmp % 10;
            if (coeficiente === 0 && contiene(banderas, CJK_ZEROS) && cadena !== '') {
                cadena = numeros[coeficiente] + cadena;
            }
            si no (coeficiente > 1 ||
                (coeficiente === 1 && dígito === 0) ||
                (coeficiente === 1 && dígito === 1 && contiene(flags, CJK_TEN_COEFICIENTS)) ||
                (coeficiente === 1 && dígito === 1 && contiene(banderas, CJK_TEN_HIGH_COEFICIENTS) && valor > 100) ||
                (coeficiente === 1 && dígito > 1 && contiene(banderas, CJK_HUNDRED_COEFICIENTS))) {
                cadena = números[coeficiente] + (dígito > 0 ? multiplicadores[dígito - 1] : '') + cadena;
            }
            si no (coeficiente === 1 && dígito > 0) {
                cadena = multiplicadores[dígito - 1] + cadena;
            }
            tmp = Math.piso(tmp / 10);
        }
        return (valor < 0 ? signonegativo : '') + cadena;
    };
    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
    var JAPONÉS_NEGATIVO = 'マイナス';
    var KOREAN_NEGATIVE = '마이너스';
    var createCounterText = función (valor, tipo, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '、' : '';
        var koreanSuffix = appendSuffix ? ', ': '';
        var spaceSuffix = appendSuffix ? ' ' : ';
        cambiar (tipo) {
            caso 0 /* DISCO */:
                return '•' + SufijoEspacio;
            caso 1 /* CIRCULO */:
                return '◦' + SufijoEspacio;
            caso 2 /* CUADRADO */:
                return '◾' + SufijoEspacio;
            caso 5 /* DECIMAL_LEADING_ZERO */:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                devolver cadena.longitud < 4 ? "0" + cadena : cadena;
            caso 4 /* CJK_DECIMAL */:
                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
            caso 6 /* LOWER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            caso 7 /* UPPER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
            caso 8 /* GRIEGO_INFERIOR */:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            caso 9 /* ALFA_INFERIOR */:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            caso 10 /* ALFA_SUPERIOR */:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            caso 11 /* ÁRABE_INDIC */:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            caso 12 /* ARMENIO */:
            case 49 /* ALTO_ARMENIO */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
            case 35 /* BAJO_ARMENIO */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            caso 13 /* BENGALÍ */:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14 // CAMBOYA */:
            caso 30 /* KHMER */:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            caso 15 /* CJK_RAMA_TERRESTRE */:
                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
            caso 16 /* CJK_HEAVENLY_STEM */:
                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
            caso 17 /* CJK_IDEOGRAFICO */:
            caso 48 /* TRAD_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFICIENTS | CJK_TEN_HIGH_COEFICIENTS | CJK_HUNDRED_COEFICIENTS);
            caso 47 /* TRAD_CHINESE_FORMAL */:
                return createCjkcounter (valor, '零壹貳 參肆 伍陸 柒捌 玖 玖', chino_formal_multipliers, '負', cjksuffix, cjk_zeros | cjk_ten_coeficientes | cjk_ten_high_coeficientes | cJK_HOFEFEFIE);
            caso 42 /* SIMP_CHINO_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFICIENTS | CJK_TEN_HIGH_COEFICIENTS | CJK_HUNDRED_COEFICIENTS);
            caso 41 /* SIMP_CHINO_FORMAL */:
                return createCjkcounter (valor, '零 壹贰 叁 肆伍 陆 柒捌 玖 玖 玖', chino_formal_multipliers, '负', cjksuffix, cjk_zeros | cjk_ten_coeficientes | cjk_ten_high_coeficientes | cjk_hcoeffiates);
            caso 26 /* INFORMAL_JAPONÉS */:
                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPONÉS_NEGATIVO, cjkSuffix, 0);
            caso 25 /* JAPONÉS_FORMAL */:
                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPONÉS_NEGATIVO, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFICIENTS | CJK_TEN_HIGH_COEFICIENTS);
            caso 31 /* KOREAN_HANGUL_FORMAL */:
                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFICIENTS | CJK_TEN_HIGH_COEFICIENTS);
            caso 33 /* COREANO_HANJA_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
            caso 32 /* COREANO_HANJA_FORMAL */:
                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFICIENTS | CJK_TEN_HIGH_COEFICIENTS);
            caso 18 /* DEVANAGARI */:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            caso 20 /* GEORGIANO */:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
            caso 21 /* GUJARATI */:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            caso 22 /* GURMUKHI */:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            caso 22 /* HEBREO */:
                return createAdditiveCounter(value, 1, 10999, HEBREO, 3 /* DECIMAL */, defaultSuffix);
            caso 23 //HIRAGANA*/:
                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
            caso 24 /* HIRAGANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
            caso 27 // KANNADA */:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            caso 28 // KATAKANA */:
                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
            caso 29 /* KATAKANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
            caso 34 //LAO*/:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case 37 // MONGOLIA */:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            caso 38 // MYANMAR */:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            caso 39 //ORIYA*/:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            caso 40 /* PERSA */:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            caso 43 // TAMIL */:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            caso 44 // TELUGU */:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            caso 45 /* TAILANDÉS */:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            caso 46 //TIBETANO*/:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            caso 3 /* DECIMAL */:
            por defecto:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };

    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignorar';
    var DocumentCloner = /** @class */ (función () {
        function DocumentCloner(contexto, elemento, opciones) {
            este.contexto = contexto;
            esto.opciones = opciones;
            this.scrolledElements = [];
            this.referenceElement = elemento;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!elemento.documentopropietario) {
                throw new Error('El elemento clonado no tiene un documento de propietario');
            }
            this.documentElement = this.cloneNode(elemento.propietarioDocumento.documentElement, false);
        }
        DocumentCloner.prototype.toIFrame = función (propietarioDocumento, tamaño de ventana) {
            var _esto = esto;
            var iframe = createIFrameContainer(documentopropietario, tamañoventana);
            si (!iframe.contentWindow) {
                return Promise.reject("No se pudo encontrar la ventana iframe");
            }
            var scrollX = propietarioDocumento.defaultView.pageXOffset;
            var scrollY = propietarioDocumento.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome no detecta imágenes de fondo relativas asignadas en hojas de <estilo> en línea cuando se obtienen a través de getComputedStyle
             si la url de la ventana está sobre: ​​en blanco, podemos asignar la url actual escribiendo en el documento
             */
            var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, función () {
                var onclone, elemento de referencia;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            this.scrolledElements.forEach(restoreNodeScroll);
                            si (clonarventana) {
                                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                si (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                    (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                    this.context.logger.warn('No se puede restaurar la posición de desplazamiento del documento clonado');
                                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                }
                            }
                            onclone = this.options.onclone;
                            elemento de referencia = this.clonedReferenceElement;
                            if (tipo de elemento de referencia === 'indefinido') {
                                return [2 /*return*/, Promise.reject("Error al encontrar " + this.referenceElement.nodeName + " en el documento clonado")];
                            }
                            if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                            return [4 /*rendimiento*/, documentClone.fonts.ready];
                        caso 1:
                            _a.enviado();
                            _a.etiqueta = 2;
                        caso 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                            return [4 /*rendimiento*/, imagesReady(documentClone)];
                        caso 3:
                            _a.enviado();
                            _a.etiqueta = 4;
                        caso 4:
                            if (typeof onclone === 'función') {
                                volver [2 /*volver*/, Promesa.resolve()
                                        .then(función () { return onclone(documentClone, referenceElement); })
                                        .then(función () { return iframe; })];
                            }
                            volver [2 /*retorno*/, iframe];
                    }
                });
            }); });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            // ¿¿Chrome desplaza el documento principal por alguna razón después de escribir en la ventana clonada?
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            devolver iframeLoad;
        };
        DocumentCloner.prototype.createElementClone = función (nodo) {
            if (esDepuración(nodo, 2 /* CLONAR */)) {
                depurador;
            }
            if (isCanvasElement(nodo)) {
                devuelve esto.createCanvasClone(nodo);
            }
            si (esVideoElement(nodo)) {
                devuelve esto.createVideoClone(nodo);
            }
            if (isStyleElement(nodo)) {
                devuelve this.createStyleClone(nodo);
            }
            var clon = node.cloneNode(false);
            if (isImageElement(clon)) {
                if (isImageElement(nodo) && nodo.currentSrc && nodo.currentSrc !== nodo.src) {
                    clon.src = nodo.currentSrc;
                    clon.srcset = '';
                }
                if (clon.cargando === 'perezoso') {
                    clon.loading = 'ansioso';
                }
            }
            if (esElementoPersonalizado(clonar)) {
                devuelve this.createCustomElementClone(clone);
            }
            devolver clon;
        };
        DocumentCloner.prototype.createCustomElementClone = función (nodo) {
            var clone = document.createElement('html2canvascustomelement');
            copyCSSStyles(nodo.estilo, clon);
            devolver clon;
        };
        DocumentCloner.prototype.createStyleClone = función (nodo) {
            intentar {
                var hoja = nodo.hoja;
                if (hoja && hoja.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                        if (regla && tipo de regla.cssText === 'cadena') {
                            volver css + rule.cssText;
                        }
                        devolver css;
                    }, '');
                    var estilo = nodo.cloneNode(falso);
                    estilo.textContent = css;
                    estilo de retorno;
                }
            }
            atrapar (e) {
                // acceder a node.sheet.cssRules arroja una DOMException
                this.context.logger.error('No se puede acceder a la propiedad cssRules', e);
                if (e.name !== 'Error de seguridad') {
                    tirar e;
                }
            }
            volver nodo.cloneNode(falso);
        };
        DocumentCloner.prototype.createCanvasClone = función (lienzo) {
            var_a;
            if (this.options.inlineImages && canvas.ownerDocument) {
                var img = lienzo.documentopropietario.createElement('img');
                intentar {
                    img.src = lienzo.toDataURL();
                    devolver imagen;
                }
                atrapar (e) {
                    this.context.logger.info("No se pueden alinear los contenidos del lienzo, el lienzo está contaminado", canvas);
                }
            }
            var clonedCanvas = canvas.cloneNode(false);
            intentar {
                lienzoclonado.ancho = lienzo.ancho;
                lienzoclonado.altura = lienzo.altura;
                var ctx = lienzo.getContext('2d');
                var clonedCtx = clonedCanvas.getContext('2d');
                si (clonedCtx) {
                    if (!this.options.allowTaint && ctx) {
                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    }
                    demás {
                        var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : lienzo.getContext('webgl');
                        si (gl) {
                            var atributos = gl.getContextAttributes();
                            if ((atributos === nulo || atributos === vacío 0 ? vacío 0 : atributos.preserveDrawingBuffer) === falso) {
                                this.context.logger.warn('No se puede clonar el contexto WebGL porque tiene preserveDrawingBuffer=false', canvas);
                            }
                        }
                        clonedCtx.drawImage(lienzo, 0, 0);
                    }
                }
                volver lienzo clonado;
            }
            atrapar (e) {
                this.context.logger.info("No se puede clonar el lienzo porque está contaminado", lienzo);
            }
            volver lienzo clonado;
        };
        DocumentCloner.prototype.createVideoClone = función (video) {
            var canvas = video.ownerDocument.createElement('canvas');
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = lienzo.getContext('2d');
            intentar {
                si (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (!this.options.allowTaint) {
                        ctx.getImageData(0, 0, lienzo.ancho, lienzo.altura);
                    }
                }
                lienzo de retorno;
            }
            atrapar (e) {
                this.context.logger.info("No se puede clonar el video porque está contaminado", video);
            }
            var blankCanvas = video.ownerDocument.createElement('canvas');
            lienzo en blanco. ancho = video. ancho de desplazamiento;
            lienzoenblanco.altura = video.alturadesplazamiento;
            volver lienzo en blanco;
        };
        DocumentCloner.prototype.appendChildNode = función (clon, hijo, copyStyles) {
            if (!isElementNode(hijo) ||
                (!isScriptElement(hijo) &&
                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                    (tipo de this.options.ignoreElements !== 'función' || !this.options.ignoreElements(child)))) {
                if (!this.options.copyStyles || !isElementNode(hijo) || !isStyleElement(hijo)) {
                    clone.appendChild(this.cloneNode(child, copyStyles));
                }
            }
        };
        DocumentCloner.prototype.cloneChildNodes = función (nodo, clon, copyStyles) {
            var _esto = esto;
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'función') {
                    var nodos asignados = child.assignedNodes();
                    if (NodosAsignados.longitud) {
                        nodosasignados.forEach(función (nodoasignado) { return _this.appendChildNode(clone, nodoasignado, copiarEstilos); });
                    }
                }
                demás {
                    this.appendChildNode(clone, child, copyStyles);
                }
            }
        };
        DocumentCloner.prototype.cloneNode = función (nodo, copyStyles) {
            if (esNodoTexto(nodo)) {
                volver document.createTextNode(node.data);
            }
            if (!nodo.documentopropietario) {
                volver nodo.cloneNode(falso);
            }
            var ventana = nodo.documentopropietario.vistapredeterminada;
            if (ventana && isElementNode(nodo) && (isHTMLElementNode(nodo) || isSVGElementNode(nodo))) {
                var clon = this.createElementClone(nodo);
                clon.style.transitionProperty = 'ninguno';
                var estilo = ventana.getComputedStyle(nodo);
                var styleBefore = window.getComputedStyle(node, ':before');
                var styleAfter = window.getComputedStyle(node, ':after');
                if (this.referenceElement === nodo && isHTMLElementNode(clone)) {
                    this.clonedReferenceElement = clon;
                }
                if (isBodyElement(clon)) {
                    createPseudoHideStyles(clonar);
                }
                var contadores = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (esElementoPersonalizado(nodo)) {
                    copiarEstilos = verdadero;
                }
                if (!isVideoElement(nodo)) {
                    this.cloneChildNodes(nodo, clon, copyStyles);
                }
                si (antes) {
                    clone.insertBefore(antes, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                si (después) {
                    clonar.appendChild(después);
                }
                this.contadores.pop(contadores);
                if ((estilo && (this.options.copyStyles || isSVGElementNode(nodo)) && !isIFrameElement(nodo)) ||
                    copiarEstilos) {
                    copyCSSStyles(estilo, clon);
                }
                if (nodo.scrollTop !== 0 || nodo.scrollLeft !== 0) {
                    this.scrolledElements.push([clon, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(nodo) || isSelectElement(nodo)) &&
                    (isTextareaElement(clon) || isSelectElement(clon))) {
                    clon.valor = nodo.valor;
                }
                devolver clon;
            }
            volver nodo.cloneNode(falso);
        };
        DocumentCloner.prototype.resolvePseudoContent = función (nodo, clon, estilo, pseudoElt) {
            var _esto = esto;
            si (! estilo) {
                devolver;
            }
            var valor = estilo.contenido;
            var documento = clon.propietarioDocumento;
            if (!document || !value || value === 'ninguno' || value === '-moz-alt-content' || style.display === 'ninguno') {
                devolver;
            }
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaración = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
            copyCSSStyles(estilo, anónimoReplacedElement);
            declaración.content.forEach(función (token) {
                if (ficha.tipo === 0 /* STRING_TOKEN */) {
                    anónimoReplacedElement.appendChild(document.createTextNode(token.value));
                }
                else if (token.type === 22 /* URL_TOKEN */) {
                    var img = documento.createElement('img');
                    img.src = token.valor;
                    img.estilo.opacidad = '1';
                    anónimoReplacedElement.appendChild(img);
                }
                else if (ficha.tipo === 18 /* FUNCIÓN */) {
                    if (ficha.nombre === 'atributo') {
                        var attr = token.valores.filter(isIdentToken);
                        if (atributo.longitud) {
                            anónimoReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                        }
                    }
                    else if (ficha.nombre === 'contador') {
                        var _a = token.values.filter(nonFunctionArgSeparator), contador = _a[0], contadorEstilo = _a[1];
                        if (contador && isIdentToken(contador)) {
                            var counterState = _this.counters.getCounterValue(counter.value);
                            var contraTipo = contraEstilo && isIdentToken(contraEstilo)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            anónimoReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                        }
                    }
                    else if (ficha.nombre === 'contadores') {
                        var _b = token.values.filter(nonFunctionArgSeparator), contador = _b[0], delim = _b[1], contadorEstilo = _b[2];
                        if (contador && isIdentToken(contador)) {
                            var counterStates = _this.counters.getCounterValues(counter.value);
                            var counterType_1 = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            var separador = delim && delim.type === 0 /* STRING_TOKEN */? delim.valor : '';
                            var text = contraEstados
                                .map(función (valor) { return createCounterText(valor, counterType_1, false); })
                                .join(separador);
                            anónimoReplacedElement.appendChild(document.createTextNode(texto));
                        }
                    }
                    demás ;
                }
                else if (token.type === 20 /* IDENT_TOKEN */) {
                    cambiar (token.valor) {
                        caso 'comilla abierta':
                            anónimoReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                            romper;
                        caso 'comilla de cierre':
                            anónimoReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                            romper;
                        por defecto:
                            // safari no analiza correctamente los tokens de cadena debido a la falta de comillas
                            anónimoReplacedElement.appendChild(document.createTextNode(token.value));
                    }
                }
            });
            anónimoReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.ANTES
                ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
                : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clon)) {
                clon.className.baseValue += newClassName;
            }
            demás {
                clon.className += newClassName;
            }
            volver anónimoReplacedElement;
        };
        DocumentCloner.destroy = función (contenedor) {
            if (contenedor.parentNode) {
                contenedor.parentNode.removeChild(contenedor);
                devolver verdadero;
            }
            falso retorno;
        };
        devolver DocumentCloner;
    }());
    var PseudoElementType;
    (función (PseudoElementType) {
        PseudoElementType[PseudoElementType["ANTES"] = 0] = "ANTES";
        PseudoElementType[PseudoElementType["DESPUÉS"] = 1] = "DESPUÉS";
    })(PseudoElementType || (PseudoElementType = {}));
    var createIFrameContainer = función (documentopropietario, límites) {
        var cloneIframeContainer = propietarioDocumento.createElement('iframe');
        cloneIframeContainer.className = 'html2canvas-container';
        cloneIframeContainer.style.visibility = 'oculto';
        cloneIframeContainer.style.position = 'fijo';
        cloneIframeContainer.style.left = '-10000px';
        cloneIframeContainer.style.top = '0px';
        cloneIframeContainer.style.border = '0';
        cloneIframeContainer.ancho = límites.ancho.toString();
        cloneIframeContainer.altura = límites.altura.toString();
        cloneIframeContainer.scrolling = 'no'; // ios no se desplazará sin él
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'verdadero');
        propietarioDocumento.cuerpo.appendChild(cloneIframeContainer);
        devolver cloneIframeContainer;
    };
    var imageReady = función (img) {
        volver nueva promesa (función (resolver) {
            si (img.completa) {
                resolver();
                devolver;
            }
            si (!img.src) {
                resolver();
                devolver;
            }
            img.onload = resolver;
            img.onerror = resolver;
        });
    };
    var imagesReady = función (documento) {
        return Promise.all([].slice.call(document.images, 0).map(imageReady));
    };
    var iframeLoader = función (iframe) {
        return new Promise(función (resolver, rechazar) {
            var cloneWindow = iframe.contentWindow;
            si (! ventana de clonación) {
                returnrechazar("No hay ventana asignada para iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = función () {
                cloneWindow.onload = iframe.onload = null;
                var intervalo = setInterval(función () {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'completo') {
                        clearInterval(intervalo);
                        resolver (iframe);
                    }
                }, 50);
            };
        });
    };
    var ignoradoStyleProperties = [
        'todo',
        'd',
        'content' // Safari muestra pseudoelementos si el contenido está configurado
    ];
    var copyCSSStyles = función (estilo, destino) {
        // Edge no proporciona valor para cssText
        for (var i = estilo.longitud - 1; i >= 0; i--) {
            var propiedad = estilo.elemento(i);
            if (ignoredStyleProperties.indexOf(propiedad) === -1) {
                target.style.setProperty(propiedad, estilo.getPropertyValue(propiedad));
            }
        }
        objetivo de retorno;
    };
    var serializeDoctype = función (doctype) {
        var cadena = '';
        si (tipo de documento) {
            str += '<!DOCTYPE';
            if (tipodoc.nombre) {
                str += tipo de documento.nombre;
            }
            si (doctype.subconjuntointerno) {
                str += doctype.internalSubset;
            }
            si (doctype.publicId) {
                str += "\"" + doctype.publicId + "\"";
            }
            si (doctype.systemId) {
                str += "\"" + doctype.systemId + "\"";
            }
            cadena += '>';
        }
        devolver str;
    };
    var restoreOwnerScroll = función (documentopropietario, x, y) {
        if (propietarioDocumento &&
            propietarioDocumento.defaultView &&
            (x !== documentopropietario.vistapredeterminada.pageXOffset || y !== documentopropietario.vistapredeterminada.pageYOffset)) {
            propietarioDocumento.defaultView.scrollTo(x, y);
        }
    };
    var restoreNodeScroll = función (_a) {
        var elemento = _a[0], x = _a[1], y = _a[2];
        elemento.scrollLeft = x;
        elemento.scrollTop = y;
    };
    var PSEUDO_ANTES = ':antes';
    var PSEUDO_AFTER = ':después';
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
    var PSEUDO_HIDE_ELEMENT_STYLE = "{\n contenido: \"\" !importante;\n mostrar: ninguno !importante;\n}";
    var createPseudoHideStyles = función (cuerpo) {
        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };
    var createStyles = función (cuerpo, estilos) {
        var documento = cuerpo.documentopropietario;
        si (documento) {
            var estilo = documento.createElement('estilo');
            estilo.textContent = estilos;
            cuerpo.appendChild(estilo);
        }
    };

    var CacheStorage = /** @class */ (función () {
        función de almacenamiento en caché () {
        }
        CacheStorage.getOrigin = función (url) {
            var enlace = CacheStorage._link;
            si (!enlace) {
                volver 'acerca de: en blanco';
            }
            enlace.href = url;
            enlace.href = enlace.href; // IE9, ¡JAJA! - http://jsfiddle.net/niklasvh/2e48b/
            return enlace.protocolo + enlace.nombre de host + enlace.puerto;
        };
        CacheStorage.isSameOrigin = función (origen) {
            volver CacheStorage.getOrigin(src) === CacheStorage._origin;
        };
        CacheStorage.setContext = función (ventana) {
            CacheStorage._link = ventana.documento.createElement('a');
            CacheStorage._origin = CacheStorage.getOrigin(ventana.ubicación.href);
        };
        CacheStorage._origin = 'acerca de: en blanco';
        volver CacheStorage;
    }());
    var Cache = /** @class */ (función () {
        function Caché (contexto, _opciones) {
            este.contexto = contexto;
            this._opciones = _opciones;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            esto._caché = {};
        }
        Cache.prototype.addImage = función (origen) {
            var resultado = Promesa.resolve();
            if (esto.has(src)) {
                resultado devuelto;
            }
            if (isBlobImage(src) || ​​isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(función () {
                    // evita el rechazo no controlado
                });
                resultado devuelto;
            }
            resultado devuelto;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cache.prototype.match = función (src) {
            devolver esto._cache[src];
        };
        Cache.prototype.loadImage = función (clave) {
            return __awaiter(this, void 0, void 0, función () {
                var isSameOrigin, useCORS, useProxy, src;
                var _esto = esto;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            isSameOrigin = CacheStorage.isSameOrigin(clave);
                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                            useProxy = !isInlineImage(clave) &&
                                !es el Mismo Origen &&
                                !isBlobImage(clave) &&
                                tipo de this._options.proxy === 'cadena' &&
                                CARACTERÍSTICAS.SUPPORT_CORS_XHR &&
                                !useCORS;
                            si (! es el Mismo Origen &&
                                this._options.allowTaint === falso &&
                                !isImagenEnLínea(clave) &&
                                !isBlobImage(clave) &&
                                !usa proxy &&
                                !useCORS) {
                                retorno [2 /*retorno*/];
                            }
                            origen = clave;
                            if (!useProxy) devuelve [3 /*romper*/, 2];
                            return [4 /*rendimiento*/, this.proxy(src)];
                        caso 1:
                            src = _a.enviado();
                            _a.etiqueta = 2;
                        caso 2:
                            this.context.logger.debug("Imagen añadida" + key.substring(0, 256));
                            return [4 /*rendimiento*/, nueva Promesa(función (resolver, rechazar) {
                                    var img = nueva imagen();
                                    img.onload = function () { return resolve(img); };
                                    img.onerror = rechazar;
                                    //ios safari 10.3 contamina el lienzo con URL de datos a menos que crossOrigin esté configurado como anónimo
                                    if (isInlineBase64Image(src) || ​​useCORS) {
                                        img.crossOrigin = 'anónimo';
                                    }
                                    img.src = src;
                                    si (img.completa === verdadero) {
                                        // Es posible que las imágenes XML en línea no se analicen y generen un error más adelante
                                        setTimeout(función () { return resolve(img); }, 500);
                                    }
                                    si (_this._options.imageTimeout > 0) {
                                        setTimeout(function () { return rechazó("Tiempo de espera agotado (" + _this._options.imageTimeout + "ms) cargando imagen"); }, _this._options.imageTimeout);
                                    }
                                })];
                        caso 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Cache.prototype.has = función (clave) {
            devuelve el tipo de this._cache[clave] !== 'indefinido';
        };
        caché.prototipo.claves = función () {
            return Promise.resolve(Object.keys(this._cache));
        };
        caché.prototipo.proxy = función (origen) {
            var _esto = esto;
            var proxy = esto._opciones.proxy;
            si (!proxy) {
                lanzar un nuevo error ('No se definió ningún proxy');
            }
            var clave = src.substring(0, 256);
            return new Promise(función (resolver, rechazar) {
                var tipo de respuesta = CARACTERÍSTICAS.SUPPORT_RESPONSE_TYPE ? 'mancha' : 'texto';
                var xhr = nuevo XMLHttpRequest();
                xhr.onload = función () {
                    if (xhr.estado === 200) {
                        if (tipo de respuesta === 'texto') {
                            resolve(xhr.respuesta);
                        }
                        demás {
                            var lector_1 = nuevo FileReader();
                            reader_1.addEventListener('cargar', función () { return resolve(reader_1.result); }, false);
                            reader_1.addEventListener('error', function (e) { return rechazó(e); }, false);
                            lector_1.readAsDataURL(xhr.response);
                        }
                    }
                    demás {
                        rechazar("Error al recurso proxy " + tecla + " con código de estado " + xhr.status);
                    }
                };
                xhr.onerror = rechazar;
                var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== 'texto' && xhr instancia de XMLHttpRequest) {
                    xhr.responseType = tipo de respuesta;
                }
                si (_this._options.imageTimeout) {
                    var timeout_1 = _this._options.imageTimeout;
                    xhr.tiempo de espera = tiempo de espera_1;
                    xhr.ontimeout = función () { return rechazó ("Se agotó el tiempo de espera (" + timeout_1 + "ms) proxy " + clave); };
                }
                xhr.send();
            });
        };
        devolver caché;
    }());
    var INLINE_SVG = /^datos:imagen\/svg\+xml/i;
    var INLINE_BASE64 = /^datos:imagen\/.*;base64,/i;
    var INLINE_IMG = /^datos:imagen\/.*/i;
    var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(origen); };
    var isInlineImage = function (src) { return INLINE_IMG.test(src); };
    var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
    var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
    var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || EN LÍNEA_SVG.prueba(origen); };

    var Vector = /** @clase */ (función () {
        función Vector(x, y) {
            este.tipo = 0 /* VECTOR */;
            esto.x = x;
            esto.y = y;
        }
        Vector.prototipo.añadir = función (deltaX, deltaY) {
            devuelve nuevo Vector(this.x + deltaX, this.y + deltaY);
        };
        vector de retorno;
    }());

    var lerp = función (a, b, t) {
        return new Vector(ax + (bx - ax) * t, ay + (by - ay) * t);
    };
    var BezierCurve = /** @class */ (función () {
        function BezierCurve(inicio, startControl, endControl, fin) {
            this.type = 1 /* BEZIER_CURVE */;
            this.inicio = inicio;
            this.startControl = startControl;
            this.endControl = endControl;
            este.fin = fin;
        }
        BezierCurve.prototype.subdivide = function (t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this. startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var destino = lerp(abbc, bccd, t);
            devolver la primera mitad? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        };
        BezierCurve.prototype.add = función (deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
        };
        BezierCurve.prototype.reverse = función () {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        };
        volver CurvaBézier;
    }());
    var isBezierCurve = function (ruta) { return ruta.tipo === 1 /* BEZIER_CURVE */; };

    var BoundCurves = /** @class */ (función () {
        function CurvasAcotadas(elemento) {
            var estilos = elemento.estilos;
            var límites = elemento.límites;
            var _a = getAbsoluteValueForTuple(estilos.borderTopLeftRadius, límites.ancho, límites.alto), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(estilos.borderTopRightRadius, límites.ancho, límites.alto), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(estilos.borderBottomRightRadius, límites.ancho, límites.altura), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(estilos.borderBottomLeftRadius, límites.ancho, límites.altura), blh = _d[0], blv = _d[1];
            var factores = [];
            factores.push((tlh + trh) / límites.ancho);
            factores.push((blh + brh) / límites.ancho);
            factores.push((tlv + blv) / límites.altura);
            factores.push((trv + brv) / límites.altura);
            var maxFactor = Math.max.apply(Math, factores);
            si (FactorMax > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }
            var topWidth = límites.ancho - trh;
            var rightHeight = límites.height - brv;
            var bottomWidth = límites.ancho - brh;
            var alturaizquierda = límites.altura - blv;
            var borderTopWidth = estilos.borderTopWidth;
            var borderRightWidth = estilos.borderRightWidth;
            var borderBottomWidth = estilos.borderBottomWidth;
            var borderLeftWidth = estilos.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth / 3, límites.superior + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, ESQUINA.SUPERIOR_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + borderLeftWidth / 3, límites.superior + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + anchosuperior, límites.superior +bordeSuperiorAncho/3, trh -bordeDerechoAncho/3, trv -bordeSuperiorAncho/3, ESQUINA.SUPERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - borderRightWidth / 3, límites.superior + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + anchoinferior, límites.superior + alturaderecha, brh - anchobordeDerecha/3, brv - anchoinferiorborde/3, ESQUINA.INFERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - bordeDerechaAncho / 3, límites.superior + límites.altura - bordeBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda + ancho del borde izquierdo / 3, límites. superior + altura izquierda, blh - ancho del borde izquierdo / 3, blv - ancho del borde inferior / 3, ESQUINA. ABAJO_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + borderLeftWidth / 3, límites.superior + límites.altura - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + (borderLeftWidth * 2) / 3, límites.superior + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, ESQUINA.SUPERIOR_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + (borderLeftWidth * 2) / 3, límites.superior + (borderTopWidth * 2) / 3);
            this.topRightBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + anchosuperior, límites.superior + (borderAnchoSuperior * 2) / 3, trh - (borderAnchoDerecho * 2) / 3, trv - (borderAnchoSuperior * 2) / 3, ESQUINA.SUPERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - (bordeDerechoAncho * 2) / 3, límites.superior + (borderSuperiorAncho * 2) / 3);
            this.bottomRightBorderDoubleInnerBox =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + anchoinferior, límites.superior + alturaderecha, brh - (borderAnchoDerecho * 2) / 3, brv - (borderAnchoInferior * 2) / 3, ESQUINA.INFERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - (bordeDerechaAncho * 2) / 3, límites.superior + límites.altura - (borderBottomWidth * 2) / 3);
            this.bottomLeftBorderDoubleInnerBox =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda + (borderAnchoIzquierdo * 2) / 3, límites.superior + alturaizquierda, blh - (borderAnchoIzquierdo * 2) / 3, blv - (borderAnchoInferior * 2) / 3, ESQUINA.INFERIOR_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + (borderAnchoIzquierdo * 2) / 3, límites.superior + límites.altura - (borderBottomWidth * 2) / 3);
            this.topLeftBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth / 2, límites.superior + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, ESQUINA.SUPERIOR_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + borderLeftWidth / 2, límites.superior + borderTopWidth / 2);
            this.topRightBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + ancho superior, límites.superior + ancho superior del borde / 2, trh - ancho derecho del borde / 2, trv - ancho superior del borde / 2, ESQUINA. SUPERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - borderRightWidth / 2, límites.superior + borderTopWidth / 2);
            this.bottomRightBorderStroke =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + anchoinferior, límites.superior + alturaderecha, brh - anchobordeDerecha / 2, brv - anchoinferiorborde / 2, ESQUINA.INFERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - bordeDerechaAncho / 2, límites.superior + límites.altura - bordeBottomWidth / 2);
            this.bottomLeftBorderStroke =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth / 2, límites.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
                    : nuevo Vector (límites.izquierda + borderLeftWidth / 2, límites.superior + límites.altura - borderBottomWidth / 2);
            this.topLeftBorderBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda, límites.superior, tlh, tlv, ESQUINA.SUPERIOR_IZQUIERDA)
                    : nuevo Vector(límites.izquierda, límites.superior);
            this.topRightBorderBox =
                verdad > 0 || vr > 0
                    ? getCurvePoints(límites.izquierda + topWidth, límites.superior, trh, trv, ESQUINA.SUPERIOR_DERECHA)
                    : nuevo Vector(límites.izquierda + límites.ancho, límites.superior);
            this.bottomRightBorderBox =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + ancho inferior, límites.superior + altura derecha, brh, brv, ESQUINA.INFERIOR_DERECHA)
                    : nuevo Vector(límites.izquierda + límites.ancho, límites.superior + límites.altura);
            this.bottomLeftBorderBox =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda, límites.superior + alturaizquierda, blh, blv, ESQUINA.INFERIOR_IZQUIERDA)
                    : nuevo Vector(límites.izquierda, límites.superior + límites.altura);
            this.topLeftPaddingBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth, límites.superior + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), ESQUINA.SUPERIOR_IZQUIERDA)
                    : nuevo Vector (límites.izquierda + borderLeftWidth, límites.superior + borderTopWidth);
            this.topRightPaddingBox =
                verdad > 0 || vr > 0
                    ? obtenerPuntosCurva(límites.izquierda + Math.min(anchosuperior, límites.ancho - bordeDerechoAncho), límites.superior + bordeSuperiorAncho, anchosuperior > límites.ancho + bordeDerechoAncho ? 0 : Math.max(0, trh - bordeDerechoAncho), Math.max( 0, trv - borderTopWidth), ESQUINA.SUPERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - bordeDerechoAncho, límites.superior + bordeSuperiorAncho);
            this.bottomRightPaddingBox =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + Math.min(ancho inferior, límites.ancho - bordeIzquierdoAncho), límites.superior + Math.min(altoderecho, límites.alto - bordeBottomWidth), Math.max(0, brh - bordeDerechoAncho), Math.max (0, brv - borderBottomWidth), ESQUINA.INFERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - bordeDerechoAncho, límites.superior + límites.altura - bordeBottomWidth);
            this.bottomLeftPaddingBox =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda + ancho del borde izquierdo, límites. superior + Math.min (altura izquierda, límites. altura - ancho del borde inferior), Math.max (0, blh - ancho del borde izquierdo), Math.max (0, blv - ancho del borde inferior), CORNER.BOTTOM_LEFT )
                    : nuevo Vector(límites.izquierda + bordeIzquierdoAncho, límites.superior + límites.altura - bordeBottomWidth);
            this.topLeftContentBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth + paddingLeft, límites.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), ESQUINA. ARRIBA A LA IZQUIERDA)
                    : nuevo Vector (límites.izquierda + bordeIzquierdoAncho + rellenoIzquierda, límites.superior + bordeSuperiorAncho + rellenoSuperior);
            this.topRightContentBox =
                verdad > 0 || vr > 0
                    ? getCurvePoints(límites.izquierda + Math.min(superiorAncho, límites.ancho + bordeIzquierdoAncho + rellenoIzquierda), límites.superior + bordeSuperiorAncho + rellenoSuperior, anchosuperior > límites.ancho + bordeIzquierdoAncho + rellenoIzquierda ? 0 : trh - bordeIzquierdoAncho + rellenoIzquierda, trv - ( borderTopWidth + paddingTop), ESQUINA.SUPERIOR_DERECHA)
                    : nuevo Vector (límites.izquierda + límites.ancho - (bordeDerechoAncho + rellenoDerecho), límites.superior + bordeSuperiorAncho + rellenoSuperior);
            this.bottomRightContentBox =
                hr > 0 || brv > 0
                    ? getCurvePoints(límites.izquierda + Math.min(ancho inferior, límites.ancho - (borderLeftWidth + paddingLeft)), límites.superior + Math.min(rightHeight, límites.altura + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), ESQUINA.BOTTOM_RIGHT)
                    : nuevo Vector (límites.izquierda + límites.ancho - (bordeDerechaAncho + rellenoDerecho), límites.superior + límites.altura - (borderBottomWidth + rellenoInferior));
            this.bottomLeftContentBox =
                ab > 0 || blv > 0
                    ? getCurvePoints(límites.izquierda + borderLeftWidth + paddingLeft, límites.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), ESQUINA.BOTTOM_LEFT)
                    : nuevo Vector (límites.izquierda + bordeIzquierdoAncho + rellenoIzquierda, límites.superior + límites.altura - (borderBottomWidth + rellenoBottom));
        }
        devuelve CurvasEnlazadas;
    }());
    var ESQUINA;
    (función (ESQUINA) {
        ESQUINA[ESQUINA["SUPERIOR_IZQUIERDA"] = 0] = "SUPERIOR_IZQUIERDA";
        ESQUINA[ESQUINA["SUPERIOR_DERECHA"] = 1] = "SUPERIOR_DERECHA";
        ESQUINA[ESQUINA["INFERIOR_DERECHA"] = 2] = "INFERIOR_DERECHA";
        ESQUINA[ESQUINA["INFERIOR_IZQUIERDA"] = 3] = "INFERIOR_IZQUIERDA";
    })(ESQUINA || (ESQUINA = {}));
    var obtenerPuntosCurva = función (x, y, r1, r2, posición) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var buey = r1 * kappa; // punto de control desplazado horizontalmente
        var oy = r2 * kappa; // desplazamiento vertical del punto de control
        var xm = x + r1; // x-medio
        var ym = y + r2; // y-medio
        interruptor (posición) {
            caso ESQUINA.SUPERIOR_IZQUIERDA:
                return new BezierCurve(nuevo Vector(x, ym), nuevo Vector(x, ym - oy), nuevo Vector(xm - ox, y), nuevo Vector(xm, y));
            caso ESQUINA.SUPERIOR_DERECHA:
                return new BezierCurve(nuevo Vector(x, y), nuevo Vector(x + ox, y), nuevo Vector(xm, ym - oy), nuevo Vector(xm, ym));
            caso ESQUINA.INFERIOR_DERECHA:
                return new BezierCurve(nuevo Vector(xm, y), nuevo Vector(xm, y + oy), nuevo Vector(x + ox, ym), nuevo Vector(x, ym));
            caso ESQUINA.INFERIOR_IZQUIERDA:
            por defecto:
                return new BezierCurve(nuevo Vector(xm, ym), nuevo Vector(xm - ox, ym), nuevo Vector(x, y + oy), nuevo Vector(x, y));
        }
    };
    var calcularBorderBoxPath = función (curvas) {
        return [curvas.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
    };
    var calcularContentBoxPath = función (curvas) {
        devolver [
            curvas.topLeftContentBox,
            curvas.topRightContentBox,
            curvas.bottomRightContentBox,
            curvas.bottomLeftContentBox
        ];
    };
    var calcularPaddingBoxPath = función (curvas) {
        devolver [
            curvas.topLeftPaddingBox,
            curvas.topRightPaddingBox,
            curvas.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
        ];
    };

    var TransformEffect = /** @class */ (función () {
        función TransformEffect(desplazamientoX, desplazamientoY, matriz) {
            this.desplazamientoX = desplazamientoX;
            this.offsetY = offsetY;
            esta.matriz = matriz;
            este.tipo = 0 /* TRANSFORMAR */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENIDO */;
        }
        devolver TransformEffect;
    }());
    var ClipEffect = /** @class */ (función () {
        function ClipEffect(ruta, destino) {
            this.ruta = ruta;
            este.objetivo = objetivo;
            este.tipo = 1 /* CLIP */;
        }
        devolver ClipEffect;
    }());
    var OpacityEffect = /** @class */ (función () {
        function EfectoOpacidad(opacidad) {
            this.opacity = opacidad;
            this.type = 2 /* OPACIDAD */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENIDO */;
        }
        volver OpacidadEfecto;
    }());
    var isTransformEffect = función (efecto) {
        return efecto.tipo === 0 /* TRANSFORMAR */;
    };
    var isClipEffect = function (efecto) { return effect.type === 1 /* CLIP */; };
    var isOpacityEffect = function (efecto) { return efecto.tipo === 2 /* OPACIDAD */; };

    var rutaigual = función (a, b) {
        if (a.longitud === b.longitud) {
            return a.some(function (v, i) { return v === b[i]; });
        }
        falso retorno;
    };
    var transformPath = función (ruta, deltaX, deltaY, deltaW, deltaH) {
        return path.map(función (punto, índice) {
            cambiar (índice) {
                caso 0:
                    punto de retorno.add(deltaX, deltaY);
                caso 1:
                    punto de retorno.add(deltaX + deltaW, deltaY);
                caso 2:
                    punto de retorno.add(deltaX + deltaW, deltaY + deltaH);
                caso 3:
                    punto de retorno.add(deltaX, deltaY + deltaH);
            }
            punto de retorno;
        });
    };

    var StackingContext = /** @class */ (función () {
        function StackingContext(contenedor) {
            este.elemento = contenedor;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            este.índiceZpositivo = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
        }
        volver StackingContext;
    }());
    var ElementPaint = /** @class */ (función () {
        función ElementPaint (contenedor, padre) {
            este.contenedor = contenedor;
            este.padre = padre;
            esto.efectos = [];
            this.curves = new BoundCurves(this.container);
            if (este.contenedor.estilos.opacidad < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }
            if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                matriz var = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }
            if (este.contenedor.styles.overflowX !== 0 /* VISIBLE */) {
                var borderBox = calcularBorderBoxPath(this.curves);
                var paddingBox = calcularPaddingBoxPath(this.curves);
                if (rutaigual(borderBox, paddingBox)) {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                }
                demás {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
                }
            }
        }
        ElementPaint.prototype.getEffects = función (objetivo) {
            var inFlow = [2 /* ABSOLUTO */, 3 /* FIJO */].indexOf(this.container.styles.position) === -1;
            var padre = este.padre;
            var efectos = this.effects.slice(0);
            mientras (padre) {
                var croplessEffects = parent.effects.filter(function (efecto) { return !isClipEffect(efecto); });
                if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                    efectos.unshift.apply(efectos, croplessEffects);
                    inFlow = [2 /* ABSOLUTO */, 3 /* FIJO */].indexOf(parent.container.styles.position) === -1;
                    if (padre.contenedor.estilos.overflowX !== 0 /* VISIBLE */) {
                        var borderBox = calcularBorderBoxPath(parent.curves);
                        var paddingBox = calcularPaddingBoxPath(parent.curves);
                        if (!equalPath(borderBox, paddingBox)) {
                            effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                        }
                    }
                }
                demás {
                    efectos.unshift.apply(efectos, croplessEffects);
                }
                padre = padre.padre;
            }
            return efectos.filtro(función (efecto) { return contiene(efecto.objetivo, objetivo); });
        };
        devolver PinturaElemento;
    }());
    var parseStackTree = función (padre, stackingContext, realStackingContext, listItems) {
        parent.container.elements.forEach(función (hijo) {
            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
            var createStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
            var paintContainer = new ElementPaint(hijo, padre);
            if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
                listItems.push(paintContainer);
            }
            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? []: elementos de la lista;
            if (tratarComoContextoApiladoReal || creaContextoApilado) {
                var parentStack = tratarAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                var pila = new StackingContext(paintContainer);
                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                    var order_1 = child.styles.zIndex.order;
                    si (pedido_1 < 0) {
                        var índice_1 = 0;
                        parentStack.negativeZIndex.some(función (actual, i) {
                            if (order_1 > current.element.container.styles.zIndex.order) {
                                índice_1 = yo;
                                falso retorno;
                            }
                            si no (índice_1 > 0) {
                                devolver verdadero;
                            }
                            falso retorno;
                        });
                        parentStack.negativeZIndex.splice(index_1, 0, stack);
                    }
                    si no (pedido_1 > 0) {
                        var índice_2 = 0;
                        parentStack.positiveZIndex.some(función (actual, i) {
                            if (order_1 >= current.element.container.styles.zIndex.order) {
                                índice_2 = i + 1;
                                falso retorno;
                            }
                            si no (índice_2 > 0) {
                                devolver verdadero;
                            }
                            falso retorno;
                        });
                        parentStack.positiveZIndex.splice(index_2, 0, stack);
                    }
                    demás {
                        parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(pila);
                    }
                }
                demás {
                    if (hijo.estilos.esFlotante()) {
                        parentStack.nonPositionedFloats.push(pila);
                    }
                    demás {
                        parentStack.nonPositionedInlineLevel.push(pila);
                    }
                }
                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            }
            demás {
                if (hijo.estilos.isInlineLevel()) {
                    stackingContext.inlineLevel.push(paintContainer);
                }
                demás {
                    stackingContext.nonInlineLevel.push(paintContainer);
                }
                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
                processListItems (hijo, listOwnerItems);
            }
        });
    };
    var processListItems = función (propietario, elementos) {
        var numeración = instancia de propietario de OLEmentContainer? propietario.inicio: 1;
        var invertida = instancia de propietario de OLEmentContainer? propietario.invertido: falso;
        for (var i = 0; i < elementos.longitud; i++) {
            var elemento = elementos[i];
            if (item.container instancia de LIElementContainer &&
                typeof item.container.value === 'número' &&
                artículo.contenedor.valor !== 0) {
                numeración = item.container.value;
            }
            item.listValue = createCounterText(numeración, item.container.styles.listStyleType, true);
            numeración += invertida? -1 : 1;
        }
    };
    var parseStackingContexts = función (contenedor) {
        var paintContainer = new ElementPaint(contenedor, nulo);
        var root = new StackingContext(paintContainer);
        var listaItems = [];
        parseStackTree(paintContainer, root, root, listItems);
        processListItems(paintContainer.container, listItems);
        devolver raíz;
    };

    var parsePathForBorder = function (curvas, borderSide) {
        cambiar (lado del borde) {
            caso 0:
                return createPathFromCurves(curvas.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            caso 1:
                return createPathFromCurves(curvas.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            caso 2:
                return createPathFromCurves(curvas.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            caso 3:
            por defecto:
                return createPathFromCurves(curvas.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderDoubleOuter = function (curvas, borderSide) {
        cambiar (lado del borde) {
            caso 0:
                return createPathFromCurves(curvas.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            caso 1:
                return createPathFromCurves(curvas.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            caso 2:
                return createPathFromCurves(curvas.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            caso 3:
            por defecto:
                return createPathFromCurves(curvas.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
        }
    };
    var parsePathForBorderDoubleInner = function (curvas, borderSide) {
        cambiar (lado del borde) {
            caso 0:
                return createPathFromCurves(curvas.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            caso 1:
                return createPathFromCurves(curvas.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            caso 2:
                return createPathFromCurves(curvas.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            caso 3:
            por defecto:
                return createPathFromCurves(curvas.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderStroke = function (curvas, borderSide) {
        cambiar (lado del borde) {
            caso 0:
                return createStrokePathFromCurves(curvas.topLeftBorderStroke, curves.topRightBorderStroke);
            caso 1:
                return createStrokePathFromCurves(curvas.topRightBorderStroke, curves.bottomRightBorderStroke);
            caso 2:
                return createStrokePathFromCurves(curvas.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            caso 3:
            por defecto:
                return createStrokePathFromCurves(curvas.bottomLeftBorderStroke, curves.topLeftBorderStroke);
        }
    };
    var createStrokePathFromCurves = función (exterior1, exterior2) {
        var ruta = [];
        if (esBezierCurve(outer1)) {
            ruta.push(outer1.subdivide(0.5, false));
        }
        demás {
            ruta.push(exterior1);
        }
        if (esBezierCurve(outer2)) {
            ruta.push(outer2.subdivide(0.5, verdadero));
        }
        demás {
            ruta.push(exterior2);
        }
        vía de retorno;
    };
    var createPathFromCurves = función (exterior1, interior1, exterior2, interior2) {
        var ruta = [];
        if (esBezierCurve(outer1)) {
            ruta.push(outer1.subdivide(0.5, false));
        }
        demás {
            ruta.push(exterior1);
        }
        if (esBezierCurve(outer2)) {
            ruta.push(outer2.subdivide(0.5, verdadero));
        }
        demás {
            ruta.push(exterior2);
        }
        if (esBezierCurve(interior2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
        }
        demás {
            ruta.push(interior2);
        }
        if (esBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
        }
        demás {
            ruta.push(interno1);
        }
        vía de retorno;
    };

    var paddingBox = función (elemento) {
        var límites = elemento.límites;
        var estilos = elemento.estilos;
        returnbounds.add(estilos.borderLeftWidth, estilos.borderTopWidth, -(estilos.borderRightWidth + estilos.borderLeftWidth), -(estilos.borderTopWidth + estilos.borderBottomWidth));
    };
    var contentBox = función (elemento) {
        var estilos = elemento.estilos;
        var límites = elemento.límites;
        var paddingLeft = getAbsoluteValue(estilos.paddingLeft, límites.ancho);
        var rellenoDerecho = getAbsoluteValue(estilos.rellenoDerecho, límites.ancho);
        var paddingTop = getAbsoluteValue(estilos.paddingTop, límites.ancho);
        var paddingBottom = getAbsoluteValue(estilos.paddingBottom, límites.ancho);
        returnbounds.add(paddingLeft + estilos.borderLeftWidth, paddingTop + estilos.borderTopWidth, -(estilos.borderRightWidth + estilos.borderLeftWidth + paddingLeft + paddingRight), -(estilos.borderTopWidth + estilos.borderBottomWidth + paddingTop + paddingBottom));
    };

    var calcularBackgroundPositioningArea = function (backgroundOrigin, elemento) {
        if (origen del fondo === 0 /* BORDER_BOX */) {
            return elemento.límites;
        }
        if (origen del fondo === 2 /* CONTENT_BOX */) {
            volver contentBox(elemento);
        }
        return paddingBox(elemento);
    };
    var calcularÁrea de pintura de fondo = función (clip de fondo, elemento) {
        if (clip de fondo === 0 /* BORDER_BOX */) {
            return elemento.límites;
        }
        if (clip de fondo === 2 /* CUADRO_DE_CONTENIDO */) {
            volver contentBox(elemento);
        }
        return paddingBox(elemento);
    };
    var calculeBackgroundRendering = función (contenedor, índice, tamaño intrínseco) {
        var backgroundPositioningArea = calcularBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
        var backgroundPaintingArea = calcularBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
        var backgroundImageSize = calcularBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicalSize, backgroundPositioningArea);
        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
        var ruta = calcularBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
        return [ruta, desplazamientoX, desplazamientoY, tamañoAncho, tamañoAltura];
    };
    var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
    var hasIntrinsicValue = function (valor) { return typeof value === 'number'; };
    var calcularBackgroundSize = función (tamaño, _a, límites) {
        var ancho intrínseco = _a[0], altura intrínseca = _a[1], proporción intrínseca = _a[2];
        var primero = tamaño[0], segundo = tamaño[1];
        si (!primero) {
            devolver [0, 0];
        }
        if (esLongitudPorcentaje(primero) && segundo && esLongitudPorcentaje(segundo)) {
            return [getAbsoluteValue(primero, límites.ancho), getAbsoluteValue(segundo, límites.alto)];
        }
        var tieneProporciónIntrínseca = tieneValorIntrínseco(proporciónintrínseca);
        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (tieneValorIntrínseco(proporciónintrínseca)) {
                var targetRatio = límites.ancho / límites.altura;
                return targetRatio < proporción intrínseca !== (first.value === BACKGROUND_SIZE.COVER)
                    ? [límites.ancho, límites.ancho / proporción intrínseca]
                    : [límites.altura * proporciónintrínseca, límites.altura];
            }
            return [límites.ancho, límites.alto];
        }
        var tieneIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
        var tieneDimensionesIntrínsecas = tieneAnchoIntrínseco || tiene altura intrínseca;
        // Si el tamaño del fondo es automático o automático automático:
        if (isAuto(primero) && (!segundo || isAuto(segundo))) {
            // Si la imagen tiene dimensiones intrínsecas tanto horizontales como verticales, se renderiza en ese tamaño.
            if (tieneIntrinsicWidth && hasIntrinsicHeight) {
                return [Ancho intrínseco, Altura intrínseca];
            }
            // Si la imagen no tiene dimensiones intrínsecas y no tiene proporciones intrínsecas,
            // se representa con el tamaño del área de posicionamiento de fondo.
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                return [límites.ancho, límites.alto];
            }
            // TODO Si la imagen no tiene dimensiones intrínsecas pero tiene proporciones intrínsecas, se renderiza como si en su lugar se hubiera especificado contener.
            // Si la imagen tiene solo una dimensión intrínseca y tiene proporciones intrínsecas, se renderiza en el tamaño correspondiente a esa dimensión.
            // La otra dimensión se calcula utilizando la dimensión especificada y las proporciones intrínsecas.
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                var ancho_1 = tieneAnchoIntrínseco
                    ? ancho intrínseco
                    : altura intrínseca * proporción intrínseca;
                var altura_1 = tiene altura intrínseca
                    ? Altura intrínseca
                    : ancho intrínseco / proporción intrínseca;
                volver [ancho_1, alto_1];
            }
            // Si la imagen tiene solo una dimensión intrínseca pero no tiene proporciones intrínsecas,
            // se representa utilizando la dimensión especificada y la otra dimensión del área de posicionamiento de fondo.
            var ancho_2 = tieneAnchoIntrínseco? intrinsecoWidth: límites.ancho;
            var height_2 = hasIntrinsicHeight ? alturaintrínseca: límites.altura;
            volver [ancho_2, alto_2];
        }
        // Si la imagen tiene proporciones intrínsecas, se estira a la dimensión especificada.
        // La dimensión no especificada se calcula utilizando la dimensión especificada y las proporciones intrínsecas.
        if (tiene una proporción intrínseca) {
            var ancho_3 = 0;
            var altura_3 = 0;
            if (esPorcentajeDeLongitud(primero)) {
                ancho_3 = getAbsoluteValue(primero, límites.ancho);
            }
            else if (esPorcentajeDeLongitud(segundo)) {
                altura_3 = getAbsoluteValue(segundo, límites.altura);
            }
            if (esAuto(primero)) {
                ancho_3 = alto_3 * proporción intrínseca;
            }
            else if (!segundo || isAuto(segundo)) {
                altura_3 = ancho_3 / proporción intrínseca;
            }
            volver [ancho_3, alto_3];
        }
        // Si la imagen no tiene proporciones intrínsecas, se estira a la dimensión especificada.
        // La dimensión no especificada se calcula utilizando la dimensión intrínseca correspondiente de la imagen,
        // si hay uno. Si no existe tal dimensión intrínseca,
        // se convierte en la dimensión correspondiente del área de posicionamiento de fondo.
        var ancho = nulo;
        var altura = nulo;
        if (esPorcentajeDeLongitud(primero)) {
            ancho = getAbsoluteValue(primero, límites.ancho);
        }
        else if (segundo && isLengthPercentage(segundo)) {
            altura = getAbsoluteValue(segundo, límites.altura);
        }
        if (ancho !== nulo && (!segundo || isAuto(segundo))) {
            altura =
                tieneAnchoIntrínseco && tieneAlturaIntrínseca
                    ? (ancho / ancho intrínseco) * altura intrínseca
                    : límites.altura;
        }
        if (altura !== null && isAuto(primero)) {
            ancho =
                tieneAnchoIntrínseco && tieneAlturaIntrínseca
                    ? (altura / altura intrínseca) * ancho intrínseco
                    : límites.ancho;
        }
        if (ancho !== nulo && alto !== nulo) {
            retorno [ancho, alto];
        }
        throw new Error("No se puede calcular el tamaño de fondo para el elemento");
    };
    var getBackgroundValueForIndex = función (valores, índice) {
        var valor = valores[índice];
        if (tipo de valor === 'indefinido') {
            valores devueltos[0];
        }
        valor de retorno;
    };
    var calcularBackgroundRepeatPath = function (repetir, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
        var x = _a[0], y = _a[1];
        var ancho = _b[0], alto = _b[1];
        cambiar (repetir) {
            caso 2 /* REPETIR_X */:
                devolver [
                    nuevo Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                ];
            caso 3 /* REPETIR_Y */:
                devolver [
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x + ancho), Math.round(backgroundPositioningArea.top)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x + ancho), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                ];
            caso 1 /* NO_REPETIR */:
                devolver [
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x + ancho), Math.round(backgroundPositioningArea.top + y)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x + ancho), Math.round(backgroundPositioningArea.top + y + height)),
                    nuevo Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                ];
            por defecto:
                devolver [
                    nuevo Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                    nuevo Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                    nuevo Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                    nuevo Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                ];
        }
    };

    var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    var SAMPLE_TEXT = 'Texto oculto';
    var FontMetrics = /** @class */ (función () {
        función FontMetrics (documento) {
            esto._datos = {};
            este._documento = documento;
        }
        FontMetrics.prototype.parseMetrics = función (familia de fuentes, tamaño de fuente) {
            var contenedor = this._document.createElement('div');
            var img = this._document.createElement('img');
            var intervalo = this._document.createElement('span');
            var cuerpo = este._documento.cuerpo;
            container.style.visibility = 'oculto';
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            contenedor.estilo.margen = '0';
            contenedor.estilo.relleno = '0';
            container.style.whiteSpace = 'ahora';
            cuerpo.appendChild(contenedor);
            img.src = PEQUEÑA_IMAGEN;
            img.ancho = 1;
            img.altura = 1;
            img.estilo.margen = '0';
            img.estilo.relleno = '0';
            img.style.verticalAlign = 'línea base';
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            intervalo.estilo.margen = '0';
            span.style.padding = '0';
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            contenedor.appendChild(span);
            contenedor.appendChild(img);
            var línea base = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'súper';
            var medio = img.offsetTop - container.offsetTop + 2;
            cuerpo.removeChild(contenedor);
            return {línea base: línea base, medio: medio};
        };
        FontMetrics.prototype.getMetrics = función (fontFamily, fontSize) {
            var clave = familia de fuentes + " " + tamaño de fuente;
            if (tipo de esto._datos[clave] === 'indefinido') {
                this._data[clave] = this.parseMetrics(fontFamily, fontSize);
            }
            devolver esto._datos[clave];
        };
        devuelve FontMetrics;
    }());

    var Renderer = /** @class */ (función () {
        renderizador de funciones (contexto, opciones) {
            este.contexto = contexto;
            esto.opciones = opciones;
        }
        volver Renderizador;
    }());

    var MASK_OFFSET = 10000;
    var CanvasRenderer = /** @class */ (función (_super) {
        __extiende(CanvasRenderer, _super);
        function CanvasRenderer(contexto, opciones) {
            var _this = _super.call(this, context, options) || este;
            _this._activeEffects = [];
            _this.canvas = opciones.canvas? opciones.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            if (!opciones.lienzo) {
                _this.canvas.width = Math.floor(opciones.ancho * opciones.escala);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(documento);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-opciones.x, -opciones.y);
            _this.ctx.textBaseline = 'abajo';
            _this._activeEffects = [];
            _this.context.logger.debug("Representador de lienzo inicializado (" + opciones.ancho + "x" + opciones.alto + ") con escala " + opciones.escala);
            devolver _esto;
        }
        CanvasRenderer.prototype.applyEffects = función (efectos) {
            var _esto = esto;
            while (this._activeEffects.length) {
                este.popEffect();
            }
            efectos.forEach(función (efecto) { return _this.applyEffect(efecto); });
        };
        CanvasRenderer.prototype.applyEffect = función (efecto) {
            esto.ctx.guardar();
            if (isOpacityEffect(efecto)) {
                this.ctx.globalAlpha = efecto.opacidad;
            }
            if (isTransformEffect(efecto)) {
                this.ctx.translate(efecto.desplazamientoX, efecto.desplazamientoY);
                this.ctx.transform(efecto.matriz[0], efecto.matriz[1], efecto.matriz[2], efecto.matriz[3], efecto.matriz[4], efecto.matriz[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(efecto)) {
                this.path(efecto.ruta);
                este.ctx.clip();
            }
            this._activeEffects.push(efecto);
        };
        CanvasRenderer.prototype.popEffect = función () {
            this._activeEffects.pop();
            este.ctx.restore();
        };
        CanvasRenderer.prototype.renderStack = función (pila) {
            return __awaiter(this, void 0, void 0, función () {
                var estilos;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            estilos = pila.elemento.contenedor.estilos;
                            if (!styles.isVisible()) return [3 /*break*/, 2];
                            return [4 /*rendimiento*/, this.renderStackContent(pila)];
                        caso 1:
                            _a.enviado();
                            _a.etiqueta = 2;
                        caso 2: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNode = función (pintura) {
            return __awaiter(this, void 0, void 0, función () {
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                                depurador;
                            }
                            if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
                            return [4 /*rendimiento*/, this.renderNodeBackgroundAndBorders(pintura)];
                        caso 1:
                            _a.enviado();
                            return [4 /*rendimiento*/, this.renderNodeContent(pintura)];
                        caso 2:
                            _a.enviado();
                            _a.etiqueta = 3;
                        caso 3: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderTextWithLetterSpacing = función (texto, letterSpacing, línea base) {
            var _esto = esto;
            if (letraEspaciado === 0) {
                this.ctx.fillText(texto.texto, texto.límites.izquierda, texto.límites.superior + línea de base);
            }
            demás {
                var letras = segmentoGrafemas(texto.texto);
                letras.reduce(función (izquierda, letra) {
                    _this.ctx.fillText(letra, izquierda, texto.límites.superior + línea de base);
                    volver a la izquierda + _this.ctx.measureText(letra).ancho;
                }, texto.límites.izquierda);
            }
        };
        CanvasRenderer.prototype.createFontStyle = función (estilos) {
            var variante de fuente = estilos.variante de fuente
                .filter(función (variante) { return variante === 'normal' || variante === 'small-caps'; })
                .unirse('');
            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
            var fontSize = isDimensionToken(styles.fontSize)
                ? "" + estilos.tamañofuente.número + estilos.tamañofuente.unidad
                : estilos.tamaño de fuente.número + "px";
            devolver [
                [estilos.fontStyle, fontVariant, estilos.fontWeight, fontSize, fontFamily].join(' '),
                Familia tipográfica,
                tamaño de fuente
            ];
        };
        CanvasRenderer.prototype.renderTextNode = función (texto, estilos) {
            return __awaiter(this, void 0, void 0, función () {
                var _a, fuente, familia de fuentes, tamaño de fuente, _b, línea de base, medio, orden de pintura;
                var _esto = esto;
                devuelve __generador(esto, función (_c) {
                    _a = this.createFontStyle(estilos), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                    this.ctx.font = fuente;
                    this.ctx.direction = estilos.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                    this.ctx.textAlign = 'izquierda';
                    this.ctx.textBaseline = 'alfabético';
                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), línea base = _b.baseline, medio = _b.medio;
                    pedidodepintura = estilos.pedidodepintura;
                    text.textBounds.forEach(función (texto) {
                        paintOrder.forEach(función (paintOrderLayer) {
                            cambiar (capaOrdenPintura) {
                                caso 0 /* LLENAR */:
                                    _this.ctx.fillStyle = asString(estilos.color);
                                    _this.renderTextWithLetterSpacing(texto, estilos.letterSpacing, línea de base);
                                    var textShadows = estilos.textShadow;
                                    if (textShadows.longitud && texto.texto.trim().longitud) {
                                        sombras de texto
                                            .rebanada(0)
                                            .contrarrestar()
                                            .forEach(función (sombratexto) {
                                            _this.ctx.shadowColor = asString(textShadow.color);
                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                            _this.ctx.shadowBlur = textShadow.blur.number;
                                            _this.renderTextWithLetterSpacing(texto, estilos.letterSpacing, línea de base);
                                        });
                                        _this.ctx.shadowColor = '';
                                        _this.ctx.shadowOffsetX = 0;
                                        _this.ctx.shadowOffsetY = 0;
                                        _this.ctx.shadowBlur = 0;
                                    }
                                    if (estilos.textDecorationLine.length) {
                                        _this.ctx.fillStyle = asString(estilos.textDecorationColor || estilos.color);
                                        estilos.textDecorationLine.forEach(función (textDecorationLine) {
                                            interruptor (líneaDecoracióntexto) {
                                                caso 1 /* SUBRAYADO */:
                                                    // Dibuja una línea en la línea base de la fuente
                                                    // TODO Como algunos navegadores muestran la línea como más de 1px si el tamaño de fuente es grande,
                                                    // hay que tener eso en cuenta tanto en posición como en tamaño
                                                    _this.ctx.fillRect(texto.límites.izquierda, Math.round(texto.límites.superior + línea de base), texto.límites.ancho, 1);
                                                    romper;
                                                caso 2 /* SOBRELÍNEA */:
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                    romper;
                                                caso 3 /* LINE_THROUGH */:
                                                    // TODO intenta encontrar la posición exacta para el paso de línea
                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                    romper;
                                            }
                                        });
                                    }
                                    romper;
                                caso 1 /* CARRERA */:
                                    if (estilos.webkitTextStrokeWidth && text.text.trim().length) {
                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                        _this.ctx.lineWidth = estilos.webkitTextStrokeWidth;
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        _this.ctx.lineJoin = !!window.chrome ? 'inglete' : 'redondo';
                                        _this.ctx.strokeText(texto.texto, texto.límites.izquierda, texto.límites.superior + línea base);
                                    }
                                    _this.ctx.strokeStyle = '';
                                    _this.ctx.lineWidth = 0;
                                    _this.ctx.lineJoin = 'inglete';
                                    romper;
                            }
                        });
                    });
                    retorno [2 /*retorno*/];
                });
            });
        };
        CanvasRenderer.prototype.renderReplacedElement = función (contenedor, curvas, imagen) {
            if (imagen && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(contenedor);
                var ruta = calcularPaddingBoxPath(curvas);
                this.ruta(ruta);
                esto.ctx.guardar();
                este.ctx.clip();
                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                este.ctx.restore();
            }
        };
        CanvasRenderer.prototype.renderNodeContent = función (pintura) {
            return __awaiter(this, void 0, void 0, función () {
                var contenedor, curvas, estilos, _i, _a, niño, imagen, imagen, iframeRenderer, lienzo, tamaño, _b, fontFamily, fontSize, línea de base, límites, x, textBounds, img, imagen, url, fontFamily, límites;
                devuelve __generador(esto, función (_c) {
                    cambiar (_c.etiqueta) {
                        caso 0:
                            this.applyEffects(paint.getEffects(4 /* CONTENIDO */));
                            contenedor = pintura.contenedor;
                            curvas = pintura.curvas;
                            estilos = contenedor.estilos;
                            _i = 0, _a = contenedor.textNodes;
                            _c.etiqueta = 1;
                        caso 1:
                            if (!(_i < _a.longitud)) return [3 /*romper*/, 4];
                            niño = _a[_i];
                            return [4 /*rendimiento*/, this.renderTextNode(hijo, estilos)];
                        caso 2:
                            _c.enviado();
                            _c.etiqueta = 3;
                        caso 3:
                            _i++;
                            volver [3 /*romper*/, 1];
                        caso 4:
                            if (!(instancia de contenedor de ImageElementContainer)) return [3 /*break*/, 8];
                            _c.etiqueta = 5;
                        caso 5:
                            _c.trys.push([5, 7, , 8]);
                            return [4 /*rendimiento*/, this.context.cache.match(container.src)];
                        caso 6:
                            imagen = _c.enviado();
                            this.renderReplacedElement(contenedor, curvas, imagen);
                            volver [3 /*romper*/, 8];
                        caso 7:
                            _c.enviado();
                            this.context.logger.error("Error al cargar la imagen " + container.src);
                            volver [3 /*romper*/, 8];
                        caso 8:
                            if (instancia de contenedor de CanvasElementContainer) {
                                this.renderReplacedElement(contenedor, curvas, contenedor.lienzo);
                            }
                            if (!(instancia de contenedor de SVGElementContainer)) return [3 /*break*/, 12];
                            _c.etiqueta = 9;
                        caso 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4 /*rendimiento*/, this.context.cache.match(container.svg)];
                        caso 10:
                            imagen = _c.enviado();
                            this.renderReplacedElement(contenedor, curvas, imagen);
                            volver [3 /*romper*/, 12];
                        caso 11:
                            _c.enviado();
                            this.context.logger.error("Error al cargar svg " + container.svg.substring(0, 255));
                            volver [3 /*romper*/, 12];
                        caso 12:
                            if (!(instancia de contenedor de IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
                            iframeRenderer = new CanvasRenderer(this.context, {
                                escala: esta.opciones.escala,
                                backgroundColor: contenedor.backgroundColor,
                                x: 0,
                                y: 0,
                                ancho: contenedor.ancho,
                                altura: contenedor.altura
                            });
                            return [4 /*rendimiento*/, iframeRenderer.render(contenedor.árbol)];
                        caso 13:
                            lienzo = _c.enviado();
                            if (contenedor.ancho && contenedor.altura) {
                                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                            }
                            _c.etiqueta = 14;
                        caso 14:
                            if (instancia de contenedor de InputElementContainer) {
                                tamaño = Math.min(contenedor.límites.ancho, contenedor.límites.altura);
                                if (contenedor.tipo === CHECKBOX) {
                                    si (contenedor.marcado) {
                                        esto.ctx.guardar();
                                        este camino([
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0,39363, contenedor.límites.superior + tamaño * 0,79),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0.16, contenedor.límites.superior + tamaño * 0.5549),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0.27347, contenedor.límites.superior + tamaño * 0.44071),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0,39694, contenedor.límites.superior + tamaño * 0,5649),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0,72983, contenedor.límites.superior + tamaño * 0,23),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0.84, contenedor.límites.superior + tamaño * 0.34085),
                                            nuevo Vector (contenedor.límites.izquierda + tamaño * 0,39363, contenedor.límites.superior + tamaño * 0,79)
                                        ]);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        este.ctx.restore();
                                    }
                                }
                                else if (contenedor.tipo === RADIO) {
                                    si (contenedor.marcado) {
                                        esto.ctx.guardar();
                                        este.ctx.beginPath();
                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        este.ctx.restore();
                                    }
                                }
                            }
                            if (isTextInputElement(contenedor) && contenedor.valor.longitud) {
                                _b = this.createFontStyle(estilos), fontFamily = _b[0], fontSize = _b[1];
                                línea base = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'alfabético';
                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                límites = contentBox(contenedor);
                                x = 0;
                                cambiar (contenedor.estilos.textAlign) {
                                    caso 1 /* CENTRO */:
                                        x += límites.ancho / 2;
                                        romper;
                                    caso 2 /* DERECHO */:
                                        x += límites.ancho;
                                        romper;
                                }
                                textBounds = limites.add(x, 0, 0, -bounds.height / 2 + 1);
                                esto.ctx.guardar();
                                este camino([
                                    nuevo Vector (límites.izquierda, límites.superior),
                                    nuevo Vector (límites.izquierda + límites.ancho, límites.superior),
                                    nuevo Vector (límites.izquierda + límites.ancho, límites.superior + límites.altura),
                                    nuevo Vector (límites.izquierda, límites.superior + límites.altura)
                                ]);
                                este.ctx.clip();
                                this.renderTextWithLetterSpacing(nuevo TextBounds(container.value, textBounds), estilos.letterSpacing, línea base);
                                este.ctx.restore();
                                this.ctx.textBaseline = 'alfabético';
                                this.ctx.textAlign = 'izquierda';
                            }
                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
                            if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
                            img = container.styles.listStyleImage;
                            if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
                            imagen = vacío 0;
                            url = img.url;
                            _c.etiqueta = 15;
                        caso 15:
                            _c.trys.push([15, 17, , 18]);
                            return [4 /*rendimiento*/, this.context.cache.match(url)];
                        caso 16:
                            imagen = _c.enviado();
                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                            volver [3 /*romper*/, 18];
                        caso 17:
                            _c.enviado();
                            this.context.logger.error("Error al cargar imagen-estilo-lista " + url);
                            volver [3 /*romper*/, 18];
                        caso 18: retorno [3 /*romper*/, 20];
                        caso 19:
                            if (paint.listValue && container.styles.listStyleType !== -1 /* NINGUNO */) {
                                fontFamily = this.createFontStyle(estilos)[0];
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'medio';
                                this.ctx.textAlign = 'derecha';
                                límites = nuevos límites (contenedor.límites.izquierda, contenedor.límites.superior + getAbsoluteValue(contenedor.estilos.paddingTop, contenedor.límites.ancho), contenedor.límites.ancho, computarAlturaLínea(estilos.alturaLínea, estilos.tamañoFuente.número) / 2 + 1);
                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue,bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                this.ctx.textBaseline = 'abajo';
                                this.ctx.textAlign = 'izquierda';
                            }
                            _c.etiqueta = 20;
                        caso 20: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderStackContent = función (pila) {
            return __awaiter(this, void 0, void 0, función () {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                devuelve __generador(esto, función (_p) {
                    cambiar (_p.etiqueta) {
                        caso 0:
                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                                depurador;
                            }
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. el fondo y los bordes del elemento que forma el contexto de apilamiento.
                            return [4 /*rendimiento*/, this.renderNodeBackgroundAndBorders(stack.element)];
                        caso 1:
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. el fondo y los bordes del elemento que forma el contexto de apilamiento.
                            _p.enviado();
                            _i = 0, _a = stack.negativeZIndex;
                            _p.etiqueta = 2;
                        caso 2:
                            if (!(_i < _a.longitud)) return [3 /*break*/, 5];
                            niño = _a[_i];
                            return [4 /*rendimiento*/, this.renderStack(child)];
                        caso 3:
                            _p.enviado();
                            _p.etiqueta = 4;
                        caso 4:
                            _i++;
                            volver [3 /*romper*/, 2];
                        caso 5:
                        // 3. Para todos sus descendientes de flujo de entrada, no posicionados, a nivel de bloque en orden de árbol:
                        return [4 /*rendimiento*/, this.renderNodeContent(stack.element)];
                        caso 6:
                            // 3. Para todos sus descendientes de flujo de entrada, no posicionados, a nivel de bloque en orden de árbol:
                            _p.enviado();
                            _b = 0, _c = stack.nonInlineLevel;
                            _p.etiqueta = 7;
                        caso 7:
                            if (!(_b < _c.longitud)) return [3 /*romper*/, 10];
                            niño = _c[_b];
                            return [4 /*rendimiento*/, this.renderNode(hijo)];
                        caso 8:
                            _p.enviado();
                            _p.etiqueta = 9;
                        caso 9:
                            _b++;
                            volver [3 /*romper*/, 7];
                        caso 10:
                            _d = 0, _e = stack.nonPositionedFloats;
                            _p.etiqueta = 11;
                        caso 11:
                            if (!(_d < _e.longitud)) return [3 /*break*/, 14];
                            niño = _e[_d];
                            return [4 /*rendimiento*/, this.renderStack(child)];
                        caso 12:
                            _p.enviado();
                            _p.etiqueta = 13;
                        caso 13:
                            _d++;
                            volver [3 /*romper*/, 11];
                        caso 14:
                            _f = 0, _g = stack.nonPositionedInlineLevel;
                            _p.etiqueta = 15;
                        caso 15:
                            if (!(_f < _g.longitud)) return [3 /*romper*/, 18];
                            niño = _g[_f];
                            return [4 /*rendimiento*/, this.renderStack(child)];
                        caso 16:
                            _p.enviado();
                            _p.etiqueta = 17;
                        caso 17:
                            _f++;
                            volver [3 /*romper*/, 15];
                        caso 18:
                            _h = 0, _j = stack.inlineLevel;
                            _p.etiqueta = 19;
                        caso 19:
                            if (!(_h < _j.longitud)) return [3 /*romper*/, 22];
                            niño = _j[_h];
                            return [4 /*rendimiento*/, this.renderNode(hijo)];
                        caso 20:
                            _p.enviado();
                            _p.etiqueta = 21;
                        caso 21:
                            _h++;
                            volver [3 /*romper*/, 19];
                        caso 22:
                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                            _p.etiqueta = 23;
                        caso 23:
                            if (!(_k < _l.longitud)) return [3 /*break*/, 26];
                            niño = _l[_k];
                            return [4 /*rendimiento*/, this.renderStack(child)];
                        caso 24:
                            _p.enviado();
                            _p.etiqueta = 25;
                        caso 25:
                            _k++;
                            volver [3 /*romper*/, 23];
                        caso 26:
                            _m = 0, _o = stack.positiveZIndex;
                            _p.etiqueta = 27;
                        caso 27:
                            if (!(_m < _o.longitud)) return [3 /*romper*/, 30];
                            niño = _o[_m];
                            return [4 /*rendimiento*/, this.renderStack(child)];
                        caso 28:
                            _p.enviado();
                            _p.etiqueta = 29;
                        caso 29:
                            _m++;
                            volver [3 /*romper*/, 27];
                        caso 30: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.mask = función (rutas) {
            este.ctx.beginPath();
            este.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            este.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            este.ctx.closePath();
        };
        CanvasRenderer.prototype.path = función (rutas) {
            este.ctx.beginPath();
            this.formatPath(rutas);
            este.ctx.closePath();
        };
        CanvasRenderer.prototype.formatPath = función (rutas) {
            var _esto = esto;
            paths.forEach(función (punto, índice) {
                var inicio = isBezierCurve(punto) ? punto.start : punto;
                si (índice === 0) {
                    _this.ctx.moveTo(inicio.x, inicio.y);
                }
                demás {
                    _this.ctx.lineTo(inicio.x, inicio.y);
                }
                if (isBezierCurve(punto)) {
                    _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
            });
        };
        CanvasRenderer.prototype.renderRepeat = función (ruta, patrón, desplazamientoX, desplazamientoY) {
            this.ruta(ruta);
            this.ctx.fillStyle = patrón;
            this.ctx.translate(desplazamientoX, desplazamientoY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        };
        CanvasRenderer.prototype.resizeImage = función (imagen, ancho, alto) {
            var_a;
            if (imagen.ancho === ancho && imagen.alto === alto) {
                imagen de retorno;
            }
            var propietarioDocumento = (_a = this.canvas.propietarioDocumento) !== null && _a !== void 0 ? _un documento;
            var lienzo = propietarioDocumento.createElement('lienzo');
            lienzo.ancho = Math.max(1, ancho);
            lienzo.altura = Math.max(1, altura);
            var ctx = lienzo.getContext('2d');
            ctx.drawImage(imagen, 0, 0, imagen.ancho, imagen.alto, 0, 0, ancho, alto);
            lienzo de retorno;
        };
        CanvasRenderer.prototype.renderBackgroundImage = función (contenedor) {
            return __awaiter(this, void 0, void 0, función () {
                var index, _loop_1, this_1, _i, _a, backgroundImage;
                devuelve __generador(esto, función (_b) {
                    cambiar (_b.etiqueta) {
                        caso 0:
                            índice = container.styles.backgroundImage.length - 1;
                            _loop_1 = función (imagen de fondo) {
                                var imagen, url, _c, camino, x, y, ancho, alto, patrón, _d, camino, x, y, ancho, alto, _e, lineLength, x0, x1, y0, y1, lienzo, ctx, degradado_1, patrón , _f, ruta, izquierda, top_1, ancho, alto, posición, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                devuelve __generador(esto, función (_h) {
                                    cambiar (_h.etiqueta) {
                                        caso 0:
                                            if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                                            imagen = vacío 0;
                                            url = imagen de fondo.url;
                                            _h.etiqueta = 1;
                                        caso 1:
                                            _h.trys.push([1, 3, , 4]);
                                            return [4 /*rendimiento*/, this_1.context.cache.match(url)];
                                        caso 2:
                                            imagen = _h.enviado();
                                            volver [3 /*romper*/, 4];
                                        caso 3:
                                            _h.enviado();
                                            this_1.context.logger.error("Error al cargar la imagen de fondo" + url);
                                            volver [3 /*romper*/, 4];
                                        caso 4:
                                            si (imagen) {
                                                _c = calcularRendimientoFondo(contenedor, índice, [
                                                    ancho de la imagen,
                                                    Altura de imagen,
                                                    imagen.ancho / imagen.altura
                                                ]), camino = _c[0], x = _c[1], y = _c[2], ancho = _c[3], alto = _c[4];
                                                patrón = this_1.ctx.createPattern(this_1.resizeImage(imagen, ancho, alto), 'repetir');
                                                this_1.renderRepeat(ruta, patrón, x, y);
                                            }
                                            volver [3 /*romper*/, 6];
                                        caso 5:
                                            if (esGradienteLineal(ImagenDeFondo)) {
                                                _d = calcularRenderizadoDeFondo(contenedor, índice, [nulo, nulo, nulo]), ruta = _d[0], x = _d[1], y = _d[2], ancho = _d[3], alto = _d[4 ];
                                                _e = calcularDirecciónGradiente(ImagenDeFondo.ángulo, ancho, alto), longitudLínea = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                lienzo = documento.createElement('lienzo');
                                                lienzo.ancho = ancho;
                                                lienzo.altura = altura;
                                                ctx = lienzo.getContext('2d');
                                                gradiente_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                    return degradado_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                ctx.fillStyle = degradado_1;
                                                ctx.fillRect(0, 0, ancho, alto);
                                                si (ancho > 0 && alto > 0) {
                                                    patrón = this_1.ctx.createPattern(lienzo, 'repetir');
                                                    this_1.renderRepeat(ruta, patrón, x, y);
                                                }
                                            }
                                            más si (isRadialGradient(backgroundImage)) {
                                                _f = calcularRendimientoFondo(contenedor, índice, [
                                                    nulo,
                                                    nulo,
                                                    nulo
                                                ]), ruta = _f[0], izquierda = _f[1], top_1 = _f[2], ancho = _f[3], altura = _f[4];
                                                position = backgroundImage.position.length === 0 ? [CINCUENTA_PERCENT]: imagen de fondo.posición;
                                                x = getAbsoluteValue(posición[0], ancho);
                                                y = getAbsoluteValue(posición[posición.longitud - 1], altura);
                                                _g = calcularRadio(ImagenDeFondo, x, y, ancho, alto), rx = _g[0], ry = _g[1];
                                                si (rx > 0 && ry > 0) {
                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    this_1.ruta(ruta);
                                                    this_1.ctx.fillStyle = radialGradient_1;
                                                    si (rx !== ry) {
                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
                                                        f = ry/rx;
                                                        invF = 1 / f;
                                                        este_1.ctx.guardar();
                                                        this_1.ctx.translate(midX, midY);
                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                        this_1.ctx.translate(-midX, -midY);
                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                        este_1.ctx.restore();
                                                    }
                                                    demás {
                                                        este_1.ctx.fill();
                                                    }
                                                }
                                            }
                                            _h.etiqueta = 6;
                                        caso 6:
                                            índice--;
                                            retorno [2 /*retorno*/];
                                    }
                                });
                            };
                            esto_1 = esto;
                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                            _b.etiqueta = 1;
                        caso 1:
                            if (!(_i < _a.longitud)) return [3 /*romper*/, 4];
                            imagen de fondo = _a[_i];
                            return [5 /*rendimiento**/, _loop_1(imagen de fondo)];
                        caso 2:
                            _b.enviado();
                            _b.etiqueta = 3;
                        caso 3:
                            _i++;
                            volver [3 /*romper*/, 1];
                        caso 4: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderSolidBorder = función (color, lado, puntoscurva) {
            return __awaiter(this, void 0, void 0, función () {
                return __generator(esto, función (_a) {
                    this.path(parsePathForBorder(curvePoints, side));
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    retorno [2 /*retorno*/];
                });
            });
        };
        CanvasRenderer.prototype.renderDoubleBorder = función (color, ancho, lado, puntos de curva) {
            return __awaiter(this, void 0, void 0, función () {
                var rutasexternas, rutasinternas;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            if (!(ancho < 3)) return [3 /*romper*/, 2];
                            return [4 /*rendimiento*/, this.renderSolidBorder(color, side, curvePoints)];
                        caso 1:
                            _a.enviado();
                            retorno [2 /*retorno*/];
                        caso 2:
                            rutasexternas = parsePathForBorderDoubleOuter(curvePoints, side);
                            this.path(outerPaths);
                            this.ctx.fillStyle = asString(color);
                            this.ctx.fill();
                            rutas internas = parsePathForBorderDoubleInner(curvePoints, side);
                            this.path(innerPaths);
                            this.ctx.fill();
                            retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = función (pintar) {
            return __awaiter(this, void 0, void 0, función () {
                var estilos, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _esto = esto;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
                            estilos = pintura.contenedor.estilos;
                            hasBackground = !isTransparent(styles.backgroundColor) || estilos.imagen de fondo.longitud;
                            bordes = [
                                {estilo: estilos.borderTopStyle, color: estilos.borderTopColor, ancho: estilos.borderTopWidth},
                                {estilo: estilos.borderRightStyle, color: estilos.borderRightColor, ancho: estilos.borderRightWidth},
                                {estilo: estilos.borderBottomStyle, color: estilos.borderBottomColor, ancho: estilos.borderBottomWidth},
                                { estilo: estilos.borderLeftStyle, color: estilos.borderLeftColor, ancho: estilos.borderLeftWidth }
                            ];
                            backgroundPaintingArea = calcularBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                            if (!(hasBackground || estilos.boxShadow.length)) return [3 /*break*/, 2];
                            esto.ctx.guardar();
                            this.path(backgroundPaintingArea);
                            este.ctx.clip();
                            if (!isTransparent(styles.backgroundColor)) {
                                this.ctx.fillStyle = asString(styles.backgroundColor);
                                this.ctx.fill();
                            }
                            return [4 /*rendimiento*/, this.renderBackgroundImage(paint.container)];
                        caso 1:
                            _a.enviado();
                            este.ctx.restore();
                            estilos.boxShadow
                                .rebanada(0)
                                .contrarrestar()
                                .forEach(función (sombra) {
                                _this.ctx.save();
                                var borderBoxArea = calcularBorderBoxPath(pintura.curvas);
                                var maskOffset = shadow.inset ? 0 : MÁSCARA_DESPLAZAMIENTO;
                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                si (sombra.recuadro) {
                                    _this.path(borderBoxArea);
                                    _este.ctx.clip();
                                    _this.mask(área de PinturaSombra);
                                }
                                demás {
                                    _this.mask(borderBoxArea);
                                    _este.ctx.clip();
                                    _this.path(shadowPaintingArea);
                                }
                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                _this.ctx.shadowColor = asString(shadow.color);
                                _this.ctx.shadowBlur = shadow.blur.number;
                                _this.ctx.fillStyle = shadow.inset ? asString(sombra.color) : 'rgba(0,0,0,1)';
                                _this.ctx.fill();
                                _this.ctx.restore();
                            });
                            _a.etiqueta = 2;
                        caso 2:
                            lado = 0;
                            _i = 0, bordes_1 = bordes;
                            _a.etiqueta = 3;
                        caso 3:
                            if (!(_i <bordes_1.longitud)) return [3 /*break*/, 13];
                            frontera = fronteras_1[_i];
                            if (!(border.style !== 0 /* NINGUNO */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
                            if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
                            return [4 /*rendimiento*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
                        caso 4:
                            _a.enviado();
                            volver [3 /*romper*/, 11];
                        caso 5:
                            if (!(border.style === 3 /* PUNTEADO */)) return [3 /*romper*/, 7];
                            return [4 /*rendimiento*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
                        caso 6:
                            _a.enviado();
                            volver [3 /*romper*/, 11];
                        caso 7:
                            if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
                            return [4 /*rendimiento*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                        caso 8:
                            _a.enviado();
                            volver [3 /*romper*/, 11];
                        caso 9: return [4 /*rendimiento*/, this.renderSolidBorder(border.color, side, paint.curves)];
                        caso 10:
                            _a.enviado();
                            _a.etiqueta = 11;
                        caso 11:
                            lado++;
                            _a.etiqueta = 12;
                        caso 12:
                            _i++;
                            volver [3 /*romper*/, 3];
                        caso 13: retorno [2 /*retorno*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderDashedDottedBorder = función (color, ancho, lado, puntos de curva, estilo) {
            return __awaiter(this, void 0, void 0, función () {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplicador, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(esto, función (_a) {
                    esto.ctx.guardar();
                    strokePaths = parsePathForBorderStroke(curvePoints, side);
                    boxPaths = parsePathForBorder(curvePoints, side);
                    if (estilo === 2 /* DISTINTO */) {
                        this.path(boxPaths);
                        este.ctx.clip();
                    }
                    if (isBezierCurve(boxPaths[0])) {
                        startX = boxPaths[0].start.x;
                        startY = boxPaths[0].start.y;
                    }
                    demás {
                        inicioX = boxPaths[0].x;
                        startY = boxPaths[0].y;
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        endX = boxPaths[1].end.x;
                        endY = boxPaths[1].end.y;
                    }
                    demás {
                        endX = boxPaths[1].x;
                        endY = boxPaths[1].y;
                    }
                    si (lado === 0 || lado === 2) {
                        longitud = Math.abs(startX - endX);
                    }
                    demás {
                        longitud = Math.abs(startY - endY);
                    }
                    este.ctx.beginPath();
                    if (estilo === 3 /* CON PUNTOS */) {
                        this.formatPath(strokePaths);
                    }
                    demás {
                        this.formatPath(boxPaths.slice(0, 2));
                    }
                    dashLength = ancho < 3 ? ancho * 3 : ancho * 2;
                    spaceLength = ancho < 3 ? ancho * 2: ancho;
                    if (estilo === 3 /* CON PUNTOS */) {
                        dashLength = ancho;
                        espacioLongitud = ancho;
                    }
                    useLineDash = verdadero;
                    si (longitud <= longitud del guión * 2) {
                        useLineDash = falso;
                    }
                    más si (longitud <= longitud del guión * 2 + longitud del espacio) {
                        multiplicador = longitud / (2 * dashLength + spaceLength);
                        dashLength *= multiplicador;
                        spaceLength *= multiplicador;
                    }
                    demás {
                        numberOfDashes = Math.floor ((longitud + spaceLength) / (dashLength + spaceLength));
                        minSpace = (longitud - numberOfDashes * dashLength) / (numberOfDashes - 1);
                        maxSpace = (longitud - (númeroDeGuiones + 1) * longitud de guión) / númeroDeGuiones;
                        espacioLongitud =
                            maxSpace <= 0 || Math.abs(longitud del espacio - minSpace) < Math.abs(longitud del espacio - maxSpace)
                                ? minEspacio
                                : maxEspacio;
                    }
                    si (usarLineDash) {
                        if (estilo === 3 /* CON PUNTOS */) {
                            this.ctx.setLineDash([0, dashLength + spaceLength]);
                        }
                        demás {
                            this.ctx.setLineDash([longitud del guión, longitud del espacio]);
                        }
                    }
                    if (estilo === 3 /* CON PUNTOS */) {
                        this.ctx.lineCap = 'redondo';
                        this.ctx.lineWidth = ancho;
                    }
                    demás {
                        this.ctx.lineWidth = ancho * 2 + 1.1;
                    }
                    this.ctx.strokeStyle = asString(color);
                    este.ctx.stroke();
                    este.ctx.setLineDash([]);
                    // espacio de borde redondo discontinuo
                    if (estilo === 2 /* DISTINTO */) {
                        if (isBezierCurve(boxPaths[0])) {
                            ruta1 = rutas de cuadro [3];
                            ruta2 = rutas de cuadro [0];
                            este.ctx.beginPath();
                            this.formatPath([nuevo Vector(ruta1.final.x, ruta1.final.y), nuevo Vector(ruta2.inicio.x, ruta2.inicio.y)]);
                            este.ctx.stroke();
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            ruta1 = rutas de cuadro [1];
                            camino2 = caminosdelcuadro[2];
                            este.ctx.beginPath();
                            this.formatPath([nuevo Vector(ruta1.final.x, ruta1.final.y), nuevo Vector(ruta2.inicio.x, ruta2.inicio.y)]);
                            este.ctx.stroke();
                        }
                    }
                    este.ctx.restore();
                    retorno [2 /*retorno*/];
                });
            });
        };
        CanvasRenderer.prototype.render = función (elemento) {
            return __awaiter(this, void 0, void 0, función () {
                pila de variables;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            if (este.opciones.color de fondo) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                            }
                            pila = parseStackingContexts(elemento);
                            return [4 /*rendimiento*/, this.renderStack(pila)];
                        caso 1:
                            _a.enviado();
                            this.applyEffects([]);
                            return [2 /*return*/, este.lienzo];
                    }
                });
            });
        };
        volver CanvasRenderer;
    }(Procesador));
    var isTextInputElement = función (contenedor) {
        if (instancia de contenedor de TextareaElementContainer) {
            devolver verdadero;
        }
        else if (instancia de contenedor de SelectElementContainer) {
            devolver verdadero;
        }
        else if (instancia de contenedor de InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            devolver verdadero;
        }
        falso retorno;
    };
    var calculeBackgroundCurvedPaintingArea = función (clip, curvas) {
        interruptor (clip) {
            caso 0 /* BORDER_BOX */:
                volver calcularBorderBoxPath(curvas);
            caso 2 /* CONTENT_BOX */:
                volver calcularContentBoxPath(curvas);
            caso 1 /* PADDING_BOX */:
            por defecto:
                volver calcularPaddingBoxPath(curvas);
        }
    };
    var canvasTextAlign = función (textAlign) {
        cambiar (alinear texto) {
            caso 1 /* CENTRO */:
                volver 'centro';
            caso 2 /* DERECHO */:
                volver 'derecha';
            caso 0 /* IZQUIERDA */:
            por defecto:
                volver 'izquierda';
        }
    };
    // ver https://github.com/niklasvh/html2canvas/pull/2645
    var iOSBrokenFonts = ['-apple-system', 'system-ui'];
    var fixIOSSystemFonts = función (fontFamilies) {
        volver /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
            ? fontFamilies.filter(función (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
            : familias de fuentes;
    };

    var ForeignObjectRenderer = /** @class */ (función (_super) {
        __extiende(ForeignObjectRenderer, _super);
        function ForeignObjectRenderer(contexto, opciones) {
            var _this = _super.call(this, context, options) || este;
            _this.canvas = opciones.canvas? opciones.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            _this.options = opciones;
            _this.canvas.width = Math.floor(opciones.ancho * opciones.escala);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-opciones.x, -opciones.y);
            _this.context.logger.debug("Representador EXPERIMENTAL ForeignObject inicializado (" + opciones.ancho + "x" + opciones.alto + " en " + opciones.x + "," + opciones.y + ") con escala " + opciones.escala);
            devolver _esto;
        }
        ForeignObjectRenderer.prototype.render = función (elemento) {
            return __awaiter(this, void 0, void 0, función () {
                var svg, img;
                return __generator(esto, función (_a) {
                    cambiar (_a.etiqueta) {
                        caso 0:
                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                            return [4 /*rendimiento*/, loadSerializedSVG(svg)];
                        caso 1:
                            img = _a.enviado();
                            if (este.opciones.color de fondo) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                            }
                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                            return [2 /*return*/, este.lienzo];
                    }
                });
            });
        };
        volver Representador de Objetos Extranjeros;
    }(Procesador));
    var loadSerializedSVG = función (svg) {
        return new Promise(función (resolver, rechazar) {
            var img = nueva imagen();
            img.onload = función () {
                resolver(img);
            };
            img.onerror = rechazar;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };

    var Logger = /** @class */ (función () {
        registrador de funciones (_a) {
            var id = _a.id, habilitado = _a.habilitado;
            esto.id = id;
            this.habilitado = habilitado;
            this.start = Fecha.ahora();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Registrador.prototipo.depuración = función () {
            var argumentos = [];
            for (var _i = 0; _i < argumentos.longitud; _i++) {
                argumentos[_i] = argumentos[_i];
            }
            si (esto.habilitado) {
                // eslint-disable-next-line sin consola
                if (typeof window !== 'indefinido' && window.console && typeof console.debug === 'function') {
                    // eslint-disable-next-line sin consola
                    console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                demás {
                    this.info.apply(esto, argumentos);
                }
            }
        };
        Registrador.prototipo.getTime = función () {
            return Fecha.ahora() - this.start;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Registrador.prototipo.info = función () {
            var argumentos = [];
            for (var _i = 0; _i < argumentos.longitud; _i++) {
                argumentos[_i] = argumentos[_i];
            }
            si (esto.habilitado) {
                // eslint-disable-next-line sin consola
                if (tipo de ventana !== 'indefinido' && ventana.consola && tipode consola.info === 'función') {
                    // eslint-disable-next-line sin consola
                    console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Registrador.prototipo.advertencia = función () {
            var argumentos = [];
            for (var _i = 0; _i < argumentos.longitud; _i++) {
                argumentos[_i] = argumentos[_i];
            }
            si (esto.habilitado) {
                // eslint-disable-next-line sin consola
                if (tipo de ventana !== 'indefinido' && ventana.consola && tipode consola.advertencia === 'función') {
                    // eslint-disable-next-line sin consola
                    console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                demás {
                    this.info.apply(esto, argumentos);
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Registrador.prototipo.error = función () {
            var argumentos = [];
            for (var _i = 0; _i < argumentos.longitud; _i++) {
                argumentos[_i] = argumentos[_i];
            }
            si (esto.habilitado) {
                // eslint-disable-next-line sin consola
                if (tipo de ventana !== 'indefinido' && ventana.consola && tipode consola.error === 'función') {
                    // eslint-disable-next-line sin consola
                    console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                demás {
                    this.info.apply(esto, argumentos);
                }
            }
        };
        Registrador.instancias = {};
        Registrador de retorno;
    }());

    var Contexto = /** @clase */ (función () {
        función Contexto (opciones, windowBounds) {
            var_a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({ id: this.instanceName, enable: options.logging });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : nueva caché (esto, opciones);
        }
        Contexto.instanciaCount = 1;
        contexto de retorno;
    }());

    var html2canvas = función (elemento, opciones) {
        if (opciones === void 0) { opciones = {}; }
        return renderElement(elemento, opciones);
    };
    if (tipo de ventana !== 'indefinido') {
        CacheStorage.setContext(ventana);
    }
    var renderElement = function (elemento, opciones) { return __awaiter(void 0, void 0, void 0, función () {
        var propietarioDocumento, vista predeterminada, opciones de recursos, opciones de contexto, opciones de ventana, límites de ventana, contexto, renderizado de objeto extranjero, opciones de clonación, clonador de documentos, elemento clonado, contenedor, _a, ancho, alto, izquierda, arriba, color de fondo, opciones de renderizado, lienzo, renderizador, raíz, renderizador;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __generator(esto, función (_u) {
            cambiar (_u.etiqueta) {
                caso 0:
                    if (!elemento || tipo de elemento !== 'objeto') {
                        return [2 /*return*/, Promise.reject('Elemento proporcionado como primer argumento no válido')];
                    }
                    propietarioDocumento = elemento.propietarioDocumento;
                    if (!documentopropietario) {
                        throw new Error("El elemento no está adjunto a un documento");
                    }
                    defaultView = propietarioDocumento.defaultView;
                    si (! vista por defecto) {
                        throw new Error("El documento no está adjunto a una ventana");
                    }
                    opciones de recursos = {
                        allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : falso,
                        imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c: 15000,
                        proxy: opciones.proxy,
                        useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d: falso
                    };
                    contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                    opciones de ventana = {
                        ancho de ventana: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f: vista por defecto. ancho interior,
                        windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : vistapredeterminada.alturainterna,
                        scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : vista por defecto.pageXOffset,
                        scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : vista por defecto.pageYOffset
                    };
                    windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                    contexto = nuevo contexto (opciones de contexto, límites de ventana);
                    ForeignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k: falso;
                    opciones de clonación = {
                        allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l: falso,
                        onclone: ​​opts.onclone,
                        ignoreElements: opts.ignoreElements,
                        imágenes en línea: representación de objetos extranjeros,
                        copyStyles: procesamiento de objetos extranjeros
                    };
                    context.logger.debug("Iniciando la clonación del documento con el tamaño " + windowBounds.width + "x" + windowBounds.height + " desplazado a " + -windowBounds.left + "," + -windowBounds.top);
                    documentCloner = new DocumentCloner(context, element, cloneOptions);
                    clonedElement = documentCloner.clonedReferenceElement;
                    si (!clonedElement) {
                        return [2 /*return*/, Promise.reject("No se pudo encontrar el elemento en el iframe clonado")]);
                    }
                    return [4 /*rendimiento*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
                caso 1:
                    contenedor = _u.enviado();
                    _a = isBodyElement(clonedElement) || esHTMLElement(clonedElement)
                        ? parseDocumentSize(clonedElement.propietarioDocumento)
                        : parseBounds(context, clonedElement), ancho = _a.ancho, alto = _a.alto, izquierda = _a.izquierda, arriba = _a.arriba;
                    backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                    renderOptions = {
                        lienzo: opts.canvas,
                        color de fondo: color de fondo,
                        escala: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                        x: ((_p = opciones.x) !== nulo && _p !== vacío 0 ? _p : 0) + izquierda,
                        y: ((_q = opciones.y) !== nulo && _q !== vacío 0 ? _q : 0) + superior,
                        ancho: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(ancho),
                        altura: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(altura)
                    };
                    if (!foreignObjectRendering) return [3 /*break*/, 3];
                    context.logger.debug("Documento clonado, utilizando representación de objetos extraños");
                    renderizador = new ForeignObjectRenderer(context, renderOptions);
                    return [4 /*rendimiento*/, renderer.render(clonedElement)];
                caso 2:
                    lienzo = _u.enviado();
                    volver [3 /*romper*/, 5];
                caso 3:
                    context.logger.debug("Documento clonado, elemento ubicado en " + izquierda + "," + arriba + " con tamaño " + ancho + "x" + alto + " usando representación computarizada");
                    context.logger.debug("Iniciando el análisis DOM");
                    root = parseTree (contexto, elemento clonado);
                    if (color de fondo === root.styles.backgroundColor) {
                        root.styles.backgroundColor = COLORES.TRANSPARENTE;
                    }
                    context.logger.debug("Iniciando renderizador para elemento en " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                    renderizador = new CanvasRenderer(context, renderOptions);
                    return [4 /*rendimiento*/, renderer.render(raíz)];
                caso 4:
                    lienzo = _u.enviado();
                    _u.etiqueta = 5;
                caso 5:
                    if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                        if (!DocumentCloner.destroy(contenedor)) {
                            context.logger.error("No se puede separar el iframe clonado porque ya no está en el DOM");
                        }
                    }
                    context.logger.debug("Representación finalizada");
                    retorno [2 /*retorno*/, lienzo];
            }
        });
    }); };
    var parseBackgroundColor = función (contexto, elemento, backgroundColorOverride) {
        var documentopropietario = elemento.documentopropietario;
        // http://www.w3.org/TR/css3-background/#fondos-especiales
        var documentBackgroundColor = propietarioDocumento.documentElement
            ? parseColor(contexto, getComputedStyle(documentopropietario.documentElement).backgroundColor)
            : COLORES.TRANSPARENTE;
        var bodyBackgroundColor = propietarioDocumento.cuerpo
            ? parseColor(contexto, getComputedStyle(documentopropietario.cuerpo).backgroundColor)
            : COLORES.TRANSPARENTE;
        var defaultBackgroundColor = typeof backgroundColorOverride === 'cadena'
            ? parseColor(contexto, backgroundColorOverride)
            : backgroundColorOverride === nulo
                ? COLORES.TRANSPARENTE
                : 0xffffffff;
        elemento de retorno === documentopropietario.documentElement
            ? esTransparente(documentBackgroundColor)
                ? es transparente (color de fondo del cuerpo)
                    ? color de fondo predeterminado
                    : color de fondo del cuerpo
                : color de fondo del documento
            : color de fondo por defecto;
    };

    devolver html2canvas;

})));
//# sourceMappingURL=html2canvas.js.map