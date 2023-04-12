import { Injectable } from '@nestjs/common';
import { Observable, map, zip } from 'rxjs';
import { SearchResult } from './dto/search-result';

@Injectable()
export class SearchService {
  joinTwoSearchResults(
    search1: Observable<SearchResult[]>,
    search2: Observable<SearchResult[]>,
  ): Observable<SearchResult[]> {
    return zip(search1, search2).pipe(
      map((x) => {
        const data = x[0].concat(x[1]);
        return data.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }),
    );
  }
}
