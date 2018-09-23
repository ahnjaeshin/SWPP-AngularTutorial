import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor() { }

  learnRecipe(recipe: string): string[] {
    const instructions: string[] = [];
    instructions.push(`Why ${recipe} is needed?`);
    instructions.push(`Anti-Pattern as solution`);
    instructions.push(`Right Solution with ${recipe}`);
    instructions.push(`Explanation to problem`);
    instructions.push(`Helpful links`);

    return instructions;
  }
}
