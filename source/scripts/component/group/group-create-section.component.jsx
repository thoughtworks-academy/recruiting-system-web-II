'use strict';

var LectureButton = require('../style-guide/lecture-button.component.jsx');
var AddSection = require('../style-guide/add-section.component.jsx');
var Arrows = require('../style-guide/arrows.component.jsx');
var SectionPage = React.createClass({
  getInitialState: function () {
    return {
      lectureButtonList:[
        {
          isPublished: true,
          role: 1,
          lecture: 'homework'
        }
      ],
      buttonList: ['预览', '发布所有未发布章节', '封闭编辑']
    }
  },
  render() {
    var buttonList = this.state.buttonList.map((item, index) => {
        return (
          <button value={item}></button>
        )
      });
    var lectureButtonList = this.state.lectureButtonList.map((item, index) => {
      return(
        <LectureButton isPublished={item.isPublished}
                       role={item.role} lecture={item.lecture}></LectureButton>
      )
    });
    return(
      <div>
        {lectureButtonList}
        <Arrows></Arrows>
        <AddSection></AddSection>
        {buttonList}
      </div>
    );
  }
});

module.exports = SectionPage;