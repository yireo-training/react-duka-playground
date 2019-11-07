import config from "config";

export default (url, prefix = "/") => {
  const suffix = config.magento_url_suffix;
  return `${prefix}${url}${suffix}`;
};
