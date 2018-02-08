import {get, has} from "../src";

describe('get', function () {
  let obj = {a: {b: {c: {d: {g: undefined}}}}, b: {}};

  it('should return the value when exists', function () {
    const result = get(obj, obj => obj.a.b);
    expect(result).toEqual({c: {d: {g: undefined}}});
  });

  it('should return the default value when not exists', function () {
    const result = get(obj, obj => obj.a.b.c.d.g, 'default');
    expect(result).toEqual('default');
  });

  it('should not throw when value does not exists', function () {
    expect(get.bind(null, obj, obj => obj.a.b.c.d.g, 'default')).not.toThrow();
  });

});


describe('has', function () {
  let obj = {a: {b: {c: {d: {g: undefined}}}}, b: {}};

  it('should return `true` when the value exists', function () {
    const result = has(obj, obj => obj.a.b);
    expect(result).toEqual(true);
  });

  it('should return `false` when the value does not exists', function () {
    const result = has(obj, obj => obj.a.b.c.d.g);
    expect(result).toEqual(false);
  });

  it('should not throw when value does not exists', function () {
    expect(has.bind(null, obj, obj => obj.a.b.c.d.g)).not.toThrow();
  });

});
