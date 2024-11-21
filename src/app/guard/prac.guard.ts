import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardPracService } from '../service/guard-prac.service';

export const pracGuard: CanActivateFn = (route, state) => {
  const studentPracService = inject(GuardPracService);
  const router = inject(Router);

  if(studentPracService.studentCreated()){
    return true;
  }else{
    router.navigate(['school-management/student-management']);
    return false;
  } 
};
