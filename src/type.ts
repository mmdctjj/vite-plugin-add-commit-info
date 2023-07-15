export interface OptionProps {

  /**
   * 挂载信息的节点，该值为 querySelector 参数
   * 默认：body标签
   */
  root?: string

  /**
   * moment日期格式
   * 默认：YYYY-MM-DD HH:mm:ss
   */
  dateFormat?: string

  /**
   * commitID，如果为true，则表示禁用，不显示
   * 默认：打包分支，最后一次提交commitID
   */
  commitID?: string | true

  /**
   * 版本号，如果为true，则表示禁用，不显示
   * 默认: 打包时间，格式取决于 dateFormat
   */
  verion?: string | true

  /**
   * 版本描述，如果为true，则表示禁用，不显示
   * 默认: 最近三次commit内容，使用`、`隔开
   */
  description?: string | true

  /**
   * 扩展字段
   * 默认 null
   */
  extendInfo?: {[key in string]: string}
}