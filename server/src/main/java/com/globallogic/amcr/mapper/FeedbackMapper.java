package com.globallogic.amcr.mapper;

import com.globallogic.amcr.model.Feedback;
import com.globallogic.amcr.payload.FeedbackResponse;
import org.apache.ibatis.annotations.*;
import com.globallogic.amcr.typehandlers.UUIDTypeHandler;
import org.apache.ibatis.mapping.StatementType;
import org.apache.ibatis.type.Alias;

@Mapper
@Alias(value = "UUIDTypeHandler")
public interface FeedbackMapper {

    @Insert("insert into feedback(id, first_name, last_name, email_address, feedback_body, book_name, book_link) values (#{id, javaType=java.util.UUID, jdbcType=OTHER, typeHandler=com.globallogic.amcr.typehandlers.UUIDTypeHandler}, #{firstName}, #{lastName}, #{emailAddress}, #{feedbackBody}, #{bookName}, #{bookLink})")
    public int save(Feedback feedback);

    @Select("select first_name, last_name, files.file_name from files join feedback on feedback_id = feedback.id limit 1")
    public FeedbackResponse get();
}
