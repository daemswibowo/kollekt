import {filtersToSQL} from "../../src/utils";

describe('filtersToSQL test', function () {
  it('should convert eq operator to SQL operator', function () {
    const filter = 'field eq 1';

    expect(filtersToSQL(filter)).toBe('field = 1');
  });

  it('should convert ne operator to SQL operator', function () {
    const filter = 'field ne 1';

    expect(filtersToSQL(filter)).toBe('field != 1');
  });

  it('should convert gt operator to SQL operator', function () {
    const filter = 'field gt 1';

    expect(filtersToSQL(filter)).toBe('field > 1');
  });

  it('should convert ge operator to SQL operator', function () {
    const filter = 'field ge 1';

    expect(filtersToSQL(filter)).toBe('field >= 1');
  });

  it('should convert lt operator to SQL operator', function () {
    const filter = 'field lt 1';

    expect(filtersToSQL(filter)).toBe('field < 1');
  });

  it('should convert le operator to SQL operator', function () {
    const filter = 'field le 1';

    expect(filtersToSQL(filter)).toBe('field <= 1');
  });

  it('should work with logical and grouping operators', function () {
    const filter = "(field eq 1 or field eq 2) and other_field eq 'equalizer'";

    expect(filtersToSQL(filter)).toBe(
      "(field = 1 or field = 2) and other_field = 'equalizer'"
    );
  });

  it('should not replacing any string that contains operator string', function () {
    const filter =
      "a eq 'equalizer' and b ne 'nenek' and c gt 'gt' or c ge 'geblek' and c lt 'lt' and d le 'le minerale'";

    expect(filtersToSQL(filter)).toBe(
      "a = 'equalizer' and b != 'nenek' and c > 'gt' or c >= 'geblek' and c < 'lt' and d <= 'le minerale'"
    );
  });
});
