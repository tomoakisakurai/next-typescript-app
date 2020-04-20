module.exports = {
  // コンパイルは ts-jest (Typescript 自身) で行う (babel を使う場合は babel-jest)
  preset: 'ts-jest',

  // project のルートディレクトリ
  roots: ['<rootDir>'],

  // テストファイルから省略パスでインポートするためのエイリアスを設定します。
  // 後に後述するtsconfig.jsonでのエイリアスと合わせるのが無難
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/$1',
  },

  // モジュールが使用するファイル拡張子の配列を指定
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // 指定したファイルをトランスパイル対象から除外
  transformIgnorePatterns: ['/node_modules/'],

  // test をしないディレクトリ
  testPathIgnorePatterns: ['.next/', '/node_modules/'],

  globals: {
    // test 時は ts-jest を使う(= babel は使わない。Next.js 自体は babelを使っている)
    // ため、'react' を指定する。つまり、本体とテストでトランスパイルするライブラリを変更する。
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
}
