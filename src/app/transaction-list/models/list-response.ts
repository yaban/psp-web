import {List} from './list';

export interface ListResponse {
  per_page: number;
  current_page: number;
  next_page_url: string;
  prev_page_url: string;
  from: number;
  to: number;
  data: List[];
}
