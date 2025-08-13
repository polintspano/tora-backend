import { WorkTypeEnum } from './enum/workType.enum';
import { StatusEnum } from './enum/status.enum';

export class TaskDto {
  id: number;
  project: string;
  workType: WorkTypeEnum;
  status: StatusEnum;
  title: string;
  subTitle: string;
  description: string;
  assignee: 'user';
  priority: 'prorityEnum';
  parent: 'another task';
  dueDate: Date;
  label: string;
  team: 'team name';
  startDate: Date;
  reporter: 'user';
  attachment: 'files';
  linkedWorkItems: 'other tasks';
  restrictTo: string;
  flagged: string;
}
