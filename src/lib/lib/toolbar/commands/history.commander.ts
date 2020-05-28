import { Commander } from './commander';
import { TBSelection } from '../../core/selection';

export class HistoryCommander implements Commander {
  recordHistory = false;

  constructor(private type: 'forward' | 'back') {
  }

  command(selection: TBSelection, overlap: boolean): void {
  }
}