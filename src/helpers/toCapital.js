export function toCapital(text) {
    if (typeof text === 'string' && text.length > 0) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    } else if (typeof text === 'undefined' || text === null) {
      return ''; // o manejar de alguna otra manera según sea necesario
    } else {
      // Manejar otros casos, por ejemplo, si text no es una cadena de texto
    }
  }
  