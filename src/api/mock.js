import * as Mock from 'mockjs';

Mock.mock('/api/hello', {
  code: 200,
  'data|10': [
    {
      name: '@cname',
      value: '@cparagraph(2)'
    }
  ]
});
