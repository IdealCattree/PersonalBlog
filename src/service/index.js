import request from "./request";

const axios = request();
/**
 * 分页获取文章
 * @param {*} page 页码
 * @param {*} limit 页容量
 * @returns
 */
export async function findArticlBypage(page = 1, limit = 10) {
  const data = await axios.get("/api/blog", {
    params: {
      page,
      limit,
    },
  });
  return data;
}

/**
 * 获取全部文章
 * @returns
 */
export async function findArticlAll() {
  return await axios.get("/api/blog/all");
}

/**
 * 根据id获取文章
 * @param {*} id 文章id
 * @returns
 */
export async function findArticlById(id) {
  return await axios.get("/api/blog/" + id);
}

/**
 * 获取每日格言
 * @returns
 */
export async function findMotto() {
  return await axios.get("/api/everyday");
}

/**
 * 获取全部每日格言
 * @returns
 */
export async function findMottoAll() {
  return await axios.get("/api/everyday/all");
}

/**
 * 发送评论
 */
export async function postComment(parent, blog_id, user_name, email, comment, website, reply_name) {
  return await axios.post("/api/comment", {
    data: {
      parent,
      blog_id,
      user_name,
      email,
      comment,
      website,
      reply_name,
    },
  });
}

/**
 * 根据文章id获取评论
 * 获取关于我页面的评论时id为 -1
 * @param {*} blogId 文章id
 * @returns
 */
export async function fetcheComment(blogId) {
  return await axios.get("/api/comment/" + blogId);
}

/**
 * 获取全部评论
 * @returns
 */
export async function fetcheCommentAll() {
  return await axios.get("/api/comment/");
}

/**
 * 管理员登录登录
 * @param {*} loginId 账号
 * @param {*} loginPwd 密码
 * @returns
 */
export async function loginIn(loginId, loginPwd) {
  return await axios.post("/api/admin/login", {
    loginId,
    loginPwd,
  });
}

/**
 * 用token验证
 * @returns
 */
export async function whoAmI() {
  const result = await axios.get("/api/admin/whoami");
  return result.data;
}

/**
 * 写博客
 * @param {*} title
 * @param {*} tags
 * @param {*} content
 * @returns
 */
export async function postBlog(title, tags, content) {
  return await axios.post("/api/blog", {
    data: {
      title,
      tags,
      content,
    },
  });
}

/**
 * 写格言
 * @param {*} motto
 * @returns
 */
export async function postMotto(motto) {
  return await axios.post("/api/everyday", {
    data: {
      content: motto,
    },
  });
}

/**
 * 根据id删除博客
 * @param {*} blogId
 * @returns
 */
export async function deleteBlogById(blogId) {
  return await axios.delete("/api/blog/" + blogId);
}

/**
 * 根据id删除格言
 * @param {*} mottoId
 * @returns
 */
export async function deleteMottoById(mottoId) {
  return await axios.delete("/api/everyday/" + mottoId);
}

/**
 * 根据id删除评论
 * @param {*} commentId
 * @returns
 */
export async function deleteCommentById(commentId) {
  return await axios.delete("/api/comment/" + commentId);
}
