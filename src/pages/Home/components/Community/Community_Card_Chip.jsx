import React from "react";

const Community_Card_Chip = () => {
  return (
    <div class="card">
      <div class="card__header">
        <img
          src="https://source.unsplash.com/600x400/?taiwan,mountain"
          alt="card__image"
          class="card__image"
          width="600"
        />
      </div>
      <div class="card__body">
        <span class="tag tag-blue">台中登山社</span>
        <h4>台中大坑東東芋圓一日遊</h4>
        <p>
          東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐，東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐
        </p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="user__image"
            class="user__image"
          />
          <div class="user__info">
            <h5>吉娃娃</h5>
            <small>兩小時前</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_Card_Chip;
