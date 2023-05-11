import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  // Si hay errores se devuelve un ValidationErrors
  // Si no hay errores se devuelve un null
  static passwordSegura(listaPasswordsFiltradas: Array<string>): ValidatorFn {

    return (control: AbstractControl) => {

      if (listaPasswordsFiltradas.includes(control.value)) {
        return {
          passwordSegura: true
        }
      }

      return null

    }

  }

}

// static required(control: AbstractControl): ValidationErrors | null;

// static minLength(minLength: number): ValidatorFn;