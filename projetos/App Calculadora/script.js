function calcular(tipo, valor) {
        if (tipo === 'acao') {
          switch (valor) {
            case 'C': 
              document.getElementById('campo').value = ''
              break;
            case '/':
            case '*':
            case '-':
            case '+':
            case '.':
              campo = document.getElementById('campo').value
              tam = campo.length
              alert(campo)
              if(campo[tam-1] !== '/' || campo[tam-1] !== '*' || campo[tam-1] !== '-' || campo[tam-1] !== '+' || campo[tam-1] !== '.')
                document.getElementById('campo').value += valor
              break;
            case '=':
              document.getElementById('campo').value = eval(document.getElementById('campo').value)
              break;
          }

        }
        else if (tipo === 'valor') {
          document.getElementById('campo').value += valor
        }

      }